import { useState } from "react";
import "./hero.css";

const VIDEO_ID = "Y_uVGwcdMQk";

const Hero = () => {
  const [playing, setPlaying] = useState(false);

  const src =
    `https://www.youtube.com/embed/${VIDEO_ID}` +
    `?autoplay=1&mute=${playing ? 0 : 1}&controls=${playing ? 1 : 0}` +
    `&loop=1&playlist=${VIDEO_ID}&playsinline=1&enablejsapi=1&rel=0`;

  return (
    <section className={`hero ${playing ? "hero--playing" : ""}`}>
      <iframe
        id="city-video"
        className="drone-video"
        src={src}
        title="Drone video of El Poblado, Medellín, Colombia"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
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

      <button
        type="button"
        className="hero-play-btn"
        onClick={() => setPlaying((p) => !p)}
      >
        {playing ? "CLOSE VIDEO" : "PLAY VIDEO"}
      </button>
    </section>
  );
};

export default Hero;