import { useEffect, useRef, useState } from "react";
import "./tr.css";
// import floral from "../../assets/floral-bg.jpg";
/* ====== REPLACE THESE PATHS / LINKS (files go in /public) ====== */
const HERO_VIDEO = "https://www.youtube.com/embed/G6HfTvY-U-Q?autoplay=1&mute=1&controls=0&start=20&playsinline=1&enablejsapi=1&rel=0";
const HOTEL_IMG = "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/courtyard.webp";
const BOOKING_BG = "../../assets/floral-bg.jpg";
const BOOKING_LINK = "https://www.clickclackhotel.com/en/bookcore/availability/clickclackmedellin/2027-08-29/2027-09-06/2/0/?cp=BODACATYJRSEPT2027MDE";
const HOTEL_WEBSITE = "https://www.clickclackhotel.com/en/";
const WEDDING_CODE = "BODACATYJRSEPT2027MDE";
const FLIGHTS_BG = "/images/medellin-bg.jpg"; // watercolor Medellín background for the flights section
const AVIANCA_LINK = "https://www.avianca.com/";
const AMERICAN_LINK = "https://www.aa.com/";
const FEEL_WEBSITE = "https://feeltourismexperiences.com/"; // TODO: Feel Tourism Experiences website
const FEEL_INSTAGRAM = "https://www.instagram.com/feel_tourismexperiences/"; // TODO: Feel Tourism Experiences Instagram
const START_AT = 20; // seconds skipped at the start (and on every loop) — keep in sync with &start= in HERO_VIDEO
const REVEAL_DELAY = 2500; // ms the video stays hidden after loading (hides YouTube's centre icon)
/* =============================================================== */

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "TRAVEL", href: "/travel", active: true },
  { label: "ITINERARY", href: "/itinerary" },
  { label: "REGISTRY", href: "/registry" },
  { label: "FAQ'S", href: "/faqs" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "BRIDAL PARTY", href: "/bridal-party" },
];

const ROOMS = [
  {
    tag: "XS",
    name: "Economy",
    meta: "16 M² · UP TO 2 GUESTS",
    beds: "Queen bed",
    desc: "Small, cozy, and thoughtfully designed. An efficient retreat with a desk and everything you need to settle in.",
    img: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/xs.webp",
  },
  {
    tag: "SD",
    name: "Standard · Queen",
    meta: "18 M² · UP TO 2 GUESTS",
    beds: "California Queen bed",
    desc: "A comfortable, practical room with sophisticated design, distinctive details, and a personal workspace.",
    img: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/sd.webp",
  },
  {
    tag: "ST",
    name: "Standard · Twin",
    meta: "18 M² · UP TO 2 GUESTS",
    beds: "Two single beds",
    desc: "The Standard room's comfort and contemporary style, with separate beds for guests sharing a room.",
    img: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/st.webp",
  },
  {
    tag: "MD",
    name: "Superior · Queen",
    meta: "20 M² · UP TO 2 GUESTS",
    beds: "California Queen bed · Balcony",
    desc: "Enjoy a little extra space and a private balcony for morning coffee and Medellín's fresh air.",
    img: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/md.webp",
  },
  {
    tag: "MT",
    name: "Superior · Twin",
    meta: "20 M² · UP TO 2 GUESTS",
    beds: "Two single beds · Balcony",
    desc: "Contemporary comfort with twin beds, a spacious clothing rack, and a balcony to enjoy the city's climate.",
    img: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/mt.webp",
  },
  {
    tag: "L",
    name: "Junior Suite",
    meta: "22 M² · UP TO 3 GUESTS",
    beds: "King bed · Bathtub",
    desc: "An eclectic, inviting suite with extra room to unwind, a personal desk, and a bathroom with a shower and bathtub.",
    img: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/l.webp",
  },
  {
    tag: "XL",
    name: "Suite",
    meta: "28 M² · UP TO 2 GUESTS",
    beds: "King bed · Balcony · Living area",
    desc: "A calming suite with a living area, a generous balcony with lounge seating, a shower and bathtub, and a coffee maker with two pods.",
    img: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/xl.webp",
  },
  {
    tag: "2XL",
    name: "Deluxe Suite",
    meta: "40 M² · UP TO 2 GUESTS",
    beds: "King bed · Separate bathtub",
    desc: "A spacious suite with a large living area and a freestanding bathtub separate from the shower. Includes a coffee maker with two pods.",
    img: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/2xl.webp",
  },
  {
    tag: "3XL",
    name: "Duplex",
    meta: "45 M² · UP TO 3 GUESTS",
    beds: "King bed · Two levels",
    desc: "A loft-style retreat with floor-to-ceiling windows, an upstairs King bed, a spacious living area, an island kitchen, a bathtub, and a coffee maker with two pods.",
    img: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/3xl.webp",
  },
];

const FLIGHT_DAYS = [
  "Tuesday · August 31, 2027",
  "Wednesday · September 1, 2027",
  "Thursday · September 2, 2027",
];

const FLIGHT_OPTIONS = [
  {
    airline: "Avianca",
    route: "Miami (MIA) to Medellín (MDE) · Nonstop",
    time: "6:40 a.m. – 9:00 a.m.",
    duration: "3 hr 20 min · Departure and arrival in local time",
    tone: "cream",
  },
  {
    airline: "American Airlines",
    route: "Miami (MIA) to Medellín (MDE) · Nonstop",
    time: "10:20 a.m. – 12:48 p.m.",
    duration: "3 hr 28 min · Departure and arrival in local time",
    tone: "rose",
  },
];

const Travel = () => {
  const iframeRef = useRef(null);
  const timer = useRef(null);
  const [paused, setPaused] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);

  // Keep the video hidden for a few seconds after it loads so YouTube's
  // centre play/pause icon never shows, then fade it in.
  const send = (payload) =>
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify(payload), "*");

  // No loop/playlist params (YouTube's loop would jump back to 0:00).
  // When the video ends, jump back to START_AT and keep playing.
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
    timer.current = setTimeout(() => setReady(true), REVEAL_DELAY);
  };

  const toggleVideo = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(
      JSON.stringify({
        event: "command",
        func: paused ? "playVideo" : "pauseVideo",
        args: [],
      }),
      "*"
    );
    setPaused((p) => !p);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(WEDDING_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <div className="travel">
      {/* ---------- NAV ---------- */}
      

      {/* ---------- HERO ---------- */}
      <section className="tr-hero">
        <iframe
          ref={iframeRef}
          className="tr-hero-video"
          src={HERO_VIDEO}
          title="Medellín hero video"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={handleLoad}
          style={{
            opacity: ready ? 1 : 0,
            transition: "opacity 1s ease",
            pointerEvents: "none", // clicks never reach YouTube, so no centre icon
          }}
        ></iframe>
        <div className="tr-hero-content">
          <p className="tr-eyebrow tr-eyebrow--gold">
            MAKE YOURSELF AT HOME · MEDELLÍN, COLOMBIA
          </p>
          <h1 className="tr-hero-title">
            Our wedding hotel: The Click Clack Hotel Medellín
          </h1>
          <a href="#stay" className="tr-btn tr-btn--dark">
            PLAN YOUR STAY ↓
          </a>
        </div>
        <button type="button" className="tr-pause" onClick={toggleVideo}>
          {paused ? "PLAY VIDEO" : "PAUSE VIDEO"}
        </button>
      </section>

      {/* ---------- HOTEL INTRO ---------- */}
      <section id="stay" className="tr-hotel">
        <div className="tr-hotel-inner">
          <div className="tr-hotel-text">
            <p className="tr-eyebrow tr-eyebrow--brown">
              OUR HOME FOR THE CELEBRATION
            </p>
            <h2 className="tr-hotel-title">
              The Click Clack
              <br />
              <em>Hotel Medellín</em>
            </h2>
            <p className="tr-hotel-loc">EL POBLADO · MEDELLÍN, COLOMBIA</p>
            <p className="tr-hotel-desc">
              We’d love to have you stay with us at The Click Clack Hotel! With
              lush greenery, bold design, and welcoming spaces to gather, it’s a
              beautiful home base for our wedding weekend.
            </p>
            <p className="tr-hotel-addr">Cra. 37 #10A-29, Medellín</p>
            <a
              href={HOTEL_WEBSITE}
              className="tr-hotel-link"
              target="_blank"
              rel="noreferrer"
            >
              Explore the hotel’s website ↗
            </a>
          </div>
          <div className="tr-hotel-img">
            <img src={HOTEL_IMG} alt="The Click Clack Hotel Medellín" />
          </div>
        </div>
      </section>

      {/* ---------- BOOKING ---------- */}
      <section
        className="tr-booking"
      
      >
        <div className="tr-booking-line tr-booking-line--top"></div>
        <div className="tr-booking-inner">
          <p className="tr-eyebrow tr-eyebrow--brown">
            A SPECIAL STAY FOR OUR FAVORITE PEOPLE
          </p>
          <h2 className="tr-booking-title">
            Book with <em>our wedding code.</em>
          </h2>
          <p className="tr-booking-desc">
            Our booking link opens with August 29–September 6, 2027 selected.
            Adjust your arrival and departure dates to fit your plans.
          </p>

          <div className="tr-code-row">
            <span className="tr-code">{WEDDING_CODE}</span>
            <button type="button" className="tr-copy" onClick={copyCode}>
              {copied ? "COPIED!" : "COPY CODE"}
            </button>
          </div>

          <a
            href={BOOKING_LINK}
            className="tr-btn tr-btn--dark"
            target="_blank"
            rel="noreferrer"
          >
            BOOK YOUR ROOM ↗
          </a>
        </div>
        <div className="tr-booking-line tr-booking-line--bottom"></div>
      </section>

      {/* ---------- ROOMS ---------- */}
      <section className="tr-rooms">
        <p className="tr-eyebrow tr-eyebrow--brown">FIND YOUR PERFECT FIT</p>
        <h2 className="tr-rooms-title">Room Options</h2>

        <div className="tr-rooms-grid">
          {ROOMS.map((r) => (
            <article className="tr-room" key={r.tag}>
              <div className="tr-room-img">
                {r.img && <img src={r.img} alt={r.name} loading="lazy" />}
                <span className="tr-room-tag">{r.tag}</span>
              </div>
              <div className="tr-room-body">
                <p className="tr-room-meta">{r.meta}</p>
                <h3 className="tr-room-name">{r.name}</h3>
                <p className="tr-room-beds">{r.beds}</p>
                <p className="tr-room-desc">{r.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- FLIGHTS ---------- */}
      <section
        className="tr-flights"
       
      >
        <div className="tr-flights-intro">
          <h2 className="tr-flights-title">Flights to Medellín</h2>
          <p className="tr-flights-text">
            We recommend flying into José María Córdova International Airport
            (MDE) in Rionegro, serving Medellín. For guests traveling from
            Miami, we recommend checking <strong>Avianca</strong> and{" "}
            <strong>American Airlines</strong> for nonstop flights.
          </p>

          <div className="tr-route">
            <span className="tr-route-code">MIA</span>
            <span className="tr-route-badge">NONSTOP</span>
            <span className="tr-route-code">MDE</span>
          </div>

          <p className="tr-flights-text">
            Here are a few arrival options for our wedding weekend. Choose the
            day that works best for you! Please keep in mind that Medellín,
            Colombia is one hour behind Miami.
          </p>
          <p className="tr-flights-note">
            Flight departure and arrival times are shown in each airport’s
            local time.
          </p>
        </div>

        <div className="tr-flights-list">
          {FLIGHT_DAYS.map((day) => (
            <div className="tr-flight-day" key={day}>
              <h3 className="tr-flight-date">{day}</h3>
              <div className="tr-flight-row">
                {FLIGHT_OPTIONS.map((f) => (
                  <article
                    className={`tr-flight-card tr-flight-card--${f.tone}`}
                    key={f.airline}
                  >
                    <h4 className="tr-flight-airline">{f.airline}</h4>
                    <p className="tr-flight-route">{f.route}</p>
                    <p className="tr-flight-time">{f.time}</p>
                    <p className="tr-flight-duration">{f.duration}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="tr-flight-row tr-flight-actions">
            <div>
              <a
                href={AVIANCA_LINK}
                className="tr-btn tr-btn--dark tr-btn--small"
                target="_blank"
                rel="noreferrer"
              >
                Search Avianca
              </a>
            </div>
            <div>
              <a
                href={AMERICAN_LINK}
                className="tr-btn tr-btn--dark tr-btn--small"
                target="_blank"
                rel="noreferrer"
              >
                Search American Airlines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- GETTING TO THE HOTEL ---------- */}
      <section className="tr-transport">
        <h2 className="tr-transport-title">Getting to the hotel</h2>
        <p className="tr-transport-intro">
          Once you land at José María Córdova International Airport (MDE), you
          can take an Uber to The Click Clack Hotel Medellín or book private
          transportation in advance.
        </p>

        <div className="tr-transport-grid">
          <article className="tr-transport-card">
            <h3 className="tr-transport-name">Take an Uber</h3>
            <p>
              Prefer to arrange your ride when you arrive? You can request an
              Uber from the airport to The Click Clack Hotel Medellín.
            </p>
            <p>
              Enter <strong>The Click Clack Hotel Medellín</strong> as your
              destination:
              <br />
              Cra. 37 #10A-29, El Poblado, Medellín.
            </p>
          </article>

          <article className="tr-transport-card tr-transport-card--green">
            <h3 className="tr-transport-name">Book a private transfer</h3>
            <p>
              If you’d like to have your airport ride arranged before you
              arrive, we recommend <strong>Feel Tourism Experiences</strong>.
              We’ve used them ourselves and had a great experience!
            </p>
            <p>
              Contact their team directly ahead of your trip to arrange your
              pickup and confirm availability and pricing.
            </p>
            <div className="tr-transport-actions">
              <a
                href={FEEL_WEBSITE}
                className="tr-btn tr-btn--dark tr-btn--small"
                target="_blank"
                rel="noreferrer"
              >
                Visit their website
              </a>
              <a
                href={FEEL_INSTAGRAM}
                className="tr-btn tr-btn--outline tr-btn--small"
                target="_blank"
                rel="noreferrer"
              >
                View Instagram
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="tr-footer">
        <p className="tr-footer-mono">C &amp; G</p>
        <p className="tr-footer-text">
          CATHERINE &amp; GILBERTO JR. · SEPTEMBER 4, 2027
        </p>
      </footer>
    </div>
  );
};

export default Travel;