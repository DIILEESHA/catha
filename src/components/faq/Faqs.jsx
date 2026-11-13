import { useState } from "react";
import "./faqs.css";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "TRAVEL", href: "/travel" },
  { label: "ITINERARY", href: "/itinerary" },
  { label: "REGISTRY", href: "/registry" },
  { label: "FAQ'S", href: "/faqs", active: true },
  { label: "OUR STORY", href: "/our-story" },
  { label: "BRIDAL PARTY", href: "/bridal-party" },
];

const TravelLink = ({ children = "Travel page" }) => (
  <a href="/travel" className="fq-inline-link">
    {children}
  </a>
);

const FAQS = [
  {
    q: "Are children welcome?",
    // TODO: screenshot doesn't show this answer, replace with your own text
    a: <>Replace this with your answer about children.</>,
  },
  {
    q: "What is the wedding dress code?",
    a: (
      <>
        Our wedding is <strong>black tie</strong>. We invite you to celebrate
        with us in floor-length gowns and tuxedos. We can’t wait to see
        everyone dressed up for such a special evening!
      </>
    ),
  },
  {
    q: "Are there any colors guests should avoid?",
    a: (
      <>
        We kindly ask guests to avoid white, cream, and blush pink. Feel free
        to wear other colors you love.
      </>
    ),
  },
  {
    q: "Will the wedding be indoors or outdoors?",
    a: (
      <>
        Our ceremony and cocktail hour will take place outdoors, followed by an
        indoor reception. Medellín can feel chilly in the evening, so we
        recommend bringing a light wrap, shawl, or jacket to stay comfortable.
      </>
    ),
  },
  {
    q: "Can I bring an additional guest?",
    a: (
      <>
        We’re so excited to celebrate with our closest family and friends!
        Please RSVP only for the guests listed in your invitation’s RSVP group.
        All invited partners and plus-ones are already included by name in the
        RSVP link. Thank you for understanding!
      </>
    ),
  },
  {
    q: "Can I take photos during the ceremony?",
    a: (
      <>
        We invite you to be fully present with us during our unplugged
        ceremony. Please silence and put away your phones and cameras, and let
        our photographers capture the moment. Once the ceremony is over, we’d
        love for you to take photos and capture memories throughout the
        celebration!
      </>
    ),
  },
  {
    q: "Do I need to stay at The Click Clack Hotel?",
    a: (
      <>
        You’re welcome to stay wherever you feel most comfortable! We’ve
        reserved a room block and arranged a special discount code at The Click
        Clack Hotel for our guests. Visit our <TravelLink /> for the booking
        link, discount code, and room options. If you choose another hotel or
        rental, we recommend staying in the El Poblado area. Please keep in
        mind that event transportation will pick up and drop off at The Click
        Clack Hotel.
      </>
    ),
  },
  {
    q: "Will transportation be provided?",
    a: (
      <>
        Yes! Transportation for our events will pick up and drop off at The
        Click Clack Hotel. If you’re staying elsewhere, please arrange your own
        transportation to and from the hotel. We’ll share pickup times and
        details closer to the wedding so you can plan ahead. Airport
        transportation is not provided, but you’re welcome to book with our
        recommended travel agency. We’ll share the agency’s information on our{" "}
        <TravelLink />. We also recommend Uber as an alternative.
      </>
    ),
  },
  {
    q: "What should I wear to the welcome party?",
    a: (
      <>
        Our welcome party will be on a rooftop, so come prepared for an outdoor
        evening! The dress code is <strong>cocktail attire</strong>—think
        florals, colorful looks, and comfortable shoes for mingling and
        celebrating. We recommend bringing a light layer for when the evening
        cools down.
      </>
    ),
  },
];

const Faqs = () => {
  // Only one FAQ open at a time. null = all closed, 0 = first one open, etc.
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="faqs">
      {/* ---------- NAV ---------- */}
    

      {/* ---------- HERO ---------- */}
      <section className="fq-hero">
        <div className="fq-hero-frame">
          <h1 className="fq-hero-title">
            Frequently Asked
            <br />
            Questions
          </h1>
        </div>
      </section>

      {/* ---------- ACCORDION ---------- */}
      <section className="fq-list-wrap">
        <div className="fq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`fq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="fq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`fq-panel-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="fq-icon">{isOpen ? "−" : "+"}</span>
                </button>

                <div id={`fq-panel-${i}`} className="fq-panel">
                  <div className="fq-panel-inner">
                    <p className="fq-answer">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="fq-footer">
        <p className="fq-footer-mono">C &amp; G</p>
        <p className="fq-footer-text">
          CATHERINE &amp; GILBERTO JR. · SEPTEMBER 4, 2027
        </p>
      </footer>
    </div>
  );
};

export default Faqs;