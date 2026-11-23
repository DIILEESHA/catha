import { useEffect, useRef, useState } from "react";
import "./hero.css";

const VIDEO_ID = "Y_uVGwcdMQk";
const START_AT = 20; // seconds to skip at the start (and on every loop)
const REVEAL_DELAY = 2500; // ms the video stays hidden after loading (hides YouTube's centre icon)

const Hero = () => {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const timer = useRef(null);
  const iframeRef = useRef(null);

  // No loop/playlist params: YouTube's own loop would jump back to 0:00.
  // We loop manually below so it always restarts at START_AT.
  const src =
    `https://www.youtube.com/embed/${VIDEO_ID}` +
    `?autoplay=1&mute=${playing ? 0 : 1}&controls=${playing ? 1 : 0}` +
    `&start=${START_AT}&playsinline=1&enablejsapi=1&rel=0`;

  const send = (payload) =>
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify(payload), "*");

  // When the video ends, jump back to START_AT and keep playing
  useEffect(() => {
    const onMessage = (e) => {
      if (!String(e.origin).includes("youtube.com")) return;
      let data = e.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }
      if (data?.event === "onStateChange" && data.info === 0) {
        send({ event: "command", func: "seekTo", args: [START_AT, true] });
        send({ event: "command", func: "playVideo", args: [] });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const handleLoad = () => {
    // subscribe to player events (needed to detect the video ending)
    send({ event: "listening", id: 1, channel: "widget" });
    clearTimeout(timer.current);
    timer.current = setTimeout(
      () => setReady(true),
      playing ? 1200 : REVEAL_DELAY
    );
  };

  const toggle = () => {
    clearTimeout(timer.current);
    setReady(false); // iframe reloads with the new src, so hide it again until it settles
    setPlaying((p) => !p);
  };

  return (
    <section className={`hero ${playing ? "hero--playing" : ""}`}>
      <iframe
        ref={iframeRef}
        id="city-video"
        className="drone-video"
        src={src}
        title="Drone video of El Poblado, Medellín, Colombia"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={handleLoad}
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 1s ease",
          // background mode: block clicks so YouTube never flashes its centre play/pause icon
          pointerEvents: playing ? "auto" : "none",
        }}
      ></iframe>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">THE WEDDING OF</p>

        <h1 className="hero-names">
          <span className="hero-name">Catherine</span>
          <span className="hero-amp">&amp;</span>
          <span className="hero-name">Gilberto Jr.</span>
        </h1>

        <p className="hero-date">SEPTEMBER 4, 2027</p>
        <p className="hero-location">MEDELLÍN, COLOMBIA</p>
      </div>

      <a href="#details" className="hero-scroll" aria-label="Scroll down">
        ↓
      </a>

      <button type="button" className="hero-play-btn" onClick={toggle}>
        {playing ? "CLOSE VIDEO" : "PLAY VIDEO"}
      </button>
    </section>
  );
};

export default Hero;