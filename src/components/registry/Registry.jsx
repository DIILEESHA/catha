import "./registry.css";

/* ====== REPLACE THIS LINK ====== */
const HONEYMOON_FUND_LINK = "https://www.theknot.com/us/gilberto-delgado-jr-and-catherine-mora-2027-09-04/registry";
/* =============================== */

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "TRAVEL", href: "/travel" },
  { label: "ITINERARY", href: "/itinerary" },
  { label: "REGISTRY", href: "/registry", active: true },
  { label: "FAQ'S", href: "/faqs" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "BRIDAL PARTY", href: "/bridal-party" },
];

const Registry = () => {
  return (
    <div className="registry">
      {/* ---------- NAV ---------- */}
      
      {/* ---------- HERO ---------- */}
      <section className="rg-hero">
        <div className="rg-hero-frame">
          <h1 className="rg-hero-box">
            Your presence
            <br />
            is <em>the present.</em>
          </h1>
        </div>
      </section>

      {/* ---------- LETTER ---------- */}
      <section className="rg-letter">
        <div className="rg-letter-frame">
          <div className="rg-letter-inner">
            <p className="rg-salutation">To our favorite people,</p>

            <p className="rg-para">
              Seriously our greatest gift is you making your way to Medellín to
              celebrate with us. We’re not asking for traditional gifts; having
              our favorite people there means more to us than anything you could
              wrap.
            </p>

            <p className="rg-para">
              But if you’d like to contribute to our honeymoon fund and help us
              keep the celebration going long after the wedding weekend, we’ll
              happily put it toward some post-wedding adventures, questionable
              decisions, and unforgettable memories.
            </p>

            <p className="rg-para">
              Thank you for making the trip, bringing the vibes, and
              celebrating with us. We can’t wait to party with you in Medellín!
            </p>

            <div className="rg-sign">
              <p>With love,</p>
              <p className="rg-sign-names">Catherine &amp; Gilberto Jr.</p>
            </div>

            <div className="rg-cta">
              <p className="rg-cta-note">Completely optional. Always appreciated.</p>
              <a
                href={HONEYMOON_FUND_LINK}
                className="rg-btn"
                target="_blank"
                rel="noreferrer"
              >
                VISIT OUR HONEYMOON FUND <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="rg-footer">
        <p className="rg-footer-mono">C &amp; G</p>
        <p className="rg-footer-text">
          CATHERINE &amp; GILBERTO JR. · SEPTEMBER 4, 2027
        </p>
      </footer>
    </div>
  );
};

export default Registry;