import { useEffect, useState } from "react";
import "./our-story.css";

/* ====== REPLACE THESE ====== */
const HERO_IMG = "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/story/header-sunset.webp"; // sunset couple photo
// Slideshow photos: paste your image links here (one per line).
// Works with full URLs (https://...) or local paths (/images/story/1.jpg).
const SLIDES = [
  ...Array.from(
    { length: 40 },
    (_, i) =>
      `https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/story/photo-${String(i + 1).padStart(2, "0")}.webp`,
  ),
];
const SLIDE_INTERVAL = 4000; // ms
/* =========================== */

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "TRAVEL", href: "/travel" },
  { label: "ITINERARY", href: "/itinerary" },
  { label: "REGISTRY", href: "/registry" },
  { label: "FAQ'S", href: "/faqs" },
  { label: "OUR STORY", href: "/our-story", active: true },
  { label: "BRIDAL PARTY", href: "/bridal-party" },
];

const pad = (n) => String(n).padStart(2, "0");

const OurStory = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [playing, index]);

  return (
    <div className="story-page">
      {/* ---------- NAV ---------- */}
   

      {/* ---------- HERO ---------- */}
      <section
        className="os-hero"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      >
        <div className="os-hero-overlay"></div>
        <div className="os-hero-content">
          <h1 className="os-hero-title">Our Story</h1>
          <p className="os-hero-sub">
            Our story began long before we ever met.
          </p>
        </div>
      </section>

      {/* ---------- STORY TEXT ---------- */}
      <section className="os-text">
        <div className="os-text-inner">
          <p>
            Our dads grew up together, played baseball together, and even worked
            together. Catherine went to high school with Junior’s cousin, and
            Junior attended Florida State University alongside Catherine’s
            sister. Our lives had been quietly overlapping for years, but
            somehow, we had never crossed paths ourselves.
          </p>

          <p>
            When Catherine’s sister married one of Junior’s best friends, we
            started showing up at the same celebrations and gatherings. Still,
            we never really got to know each other—the timing wasn’t right.
          </p>

          <blockquote className="os-quote">Until it was.</blockquote>

          <p>
            One night, Catherine’s sister encouraged her to join a night out
            with friends at Bodega in Coconut Grove. Catherine was nearby at a
            house party and decided to stop by with her best friend. What she
            didn’t know was that her sister had a little matchmaking planned.
            Junior was there with her sister’s husband, and after years of
            almost meeting, we finally had a proper introduction.
          </p>

          <blockquote className="os-quote">
            We started talking that night, and we haven’t stopped since.
          </blockquote>

          <p>
            Three months later, on July 6, Junior planned a date at a pop-up
            balloon museum in Wynwood, followed by dinner, and asked Catherine
            to be his girlfriend. From there, we built our relationship through
            everyday moments, new adventures, and getting to know each other
            more deeply. A year later, Junior asked Catherine to move in with
            him and Maverick, our golden retriever, and we began making a home
            and a life together.
          </p>

          <p>
            In the summer of 2026, we planned a family trip to Greece. Catherine
            had always dreamed of watching a Greek sunset, and Junior told her
            he had something special planned for our anniversary. On a cliff
            overlooking the water in Paros, he made that dream come true—and
            then made the moment even more unforgettable by asking her to marry
            him.
          </p>

          <p>
            Now, we’re looking forward to marriage, growing our family, and
            filling our home with the love and memories we’ve only begun to
            create. After so many years of connections and almost-meetings,
            we’re grateful that the timing finally brought us together—and we
            can’t wait to celebrate this next chapter with all of you.
          </p>
        </div>
      </section>

      {/* ---------- SLIDESHOW ---------- */}
      <section className="os-gallery">
        <h2 className="os-gallery-title">
          A few of our <em>favorite moments.</em>
        </h2>

        <div className="os-slide-frame">
          <div className="os-slide">
            <img
              key={index}
              src={SLIDES[index]}
              alt={`Favorite moment ${index + 1}`}
            />
          </div>
        </div>

        <div className="os-controls">
          <button
            type="button"
            className="os-ctrl os-ctrl--sq"
            onClick={prev}
            aria-label="Previous photo"
          >
            ←
          </button>
          <span className="os-counter">
            {pad(index + 1)} / {pad(SLIDES.length)}
          </span>
          <button
            type="button"
            className="os-ctrl os-ctrl--sq"
            onClick={next}
            aria-label="Next photo"
          >
            →
          </button>
          <button
            type="button"
            className="os-ctrl os-ctrl--pause"
            onClick={() => setPlaying((p) => !p)}
          >
            {playing ? "Pause slideshow" : "Play slideshow"}
          </button>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="os-footer">
        <p className="os-footer-mono">C &amp; G</p>
        <p className="os-footer-text">
          CATHERINE &amp; GILBERTO JR. · SEPTEMBER 4, 2027
        </p>
      </footer>
    </div>
  );
};

export default OurStory;
