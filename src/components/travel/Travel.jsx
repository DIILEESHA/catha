import { useRef, useState } from "react";
import "./tr.css";

/* ====== REPLACE THESE PATHS / LINKS (files go in /public) ====== */
const HERO_VIDEO = "https://www.youtube.com/embed/G6HfTvY-U-Q?autoplay=1&mute=1&controls=0&loop=1&playlist=G6HfTvY-U-Q&playsinline=1&enablejsapi=1&rel=0";
const HOTEL_IMG = "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/hotel/courtyard.webp";
const BOOKING_BG = "/images/floral-bg.jpg";
const BOOKING_LINK = "https://www.clickclackhotel.com/en/bookcore/availability/clickclackmedellin/2027-08-29/2027-09-06/2/0/?cp=BODACATYJRSEPT2027MDE";
const HOTEL_WEBSITE = "https://www.clickclackhotel.com/en/";
const WEDDING_CODE = "BODACATYJRSEPT2027MDE";
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

const Travel = () => {
  const iframeRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [copied, setCopied] = useState(false);

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
        style={{ backgroundImage: `url(${BOOKING_BG})` }}
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