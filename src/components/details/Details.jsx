import { useEffect, useState } from "react";
import "./details.css";

/* ====== REPLACE THESE WITH YOUR OWN IMAGES / LINKS ====== */
import coupleImg from "../../assets/couple.jpg"; // black & white couple photo
const rsvpBg = "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/rsvp-postcard.webp"; // illustrated Medellín background
const RSVP_LINK = "https://cg-rsvp.vercel.app/"; // your RSVP form / invitation URL
/* ======================================================== */

// Sept 4, 2027 00:00 Medellín time (UTC-5)
const WEDDING_DATE = new Date("2027-09-04T00:00:00-05:00").getTime();

const getTimeLeft = () => {
  const diff = Math.max(WEDDING_DATE - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const Details = () => {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "DAYS", value: time.days },
    { label: "HOURS", value: time.hours },
    { label: "MINUTES", value: time.minutes },
    { label: "SECONDS", value: time.seconds },
  ];

  return (
    <div id="details" className="details">
      {/* ---------- STORY ---------- */}
      <section className="story">
        <div className="story-inner">
          <div className="story-photo-wrap">
            <div className="story-photo-frame">
              <img src={coupleImg} alt="Catherine and Gilberto Jr." />
              <span className="story-monogram">C &amp; G</span>
            </div>
          </div>

          <div className="story-text">
            <p className="eyebrow eyebrow--gold">
              OUR FAVORITE PEOPLE. OUR NEXT CHAPTER.
            </p>
            <h2 className="story-title">
              Meet us in
              <br />
              <em>Medellín!</em>
            </h2>
            <p>
              We’re so excited to celebrate this next chapter with all of our
              favorite people!
            </p>
            <p>
              Get ready for beautiful views, delicious food, and plenty of
              dancing. Having you there will make it all the more special.
            </p>
            <p className="story-sign">
              With love,
              <br />
              Catherine &amp; Gilberto Jr.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- COUNTDOWN ---------- */}
      <section className="countdown">
        <div className="countdown-frame">
          <p className="eyebrow eyebrow--gold">
            SEPTEMBER 4, 2027 · MEDELLÍN, COLOMBIA
          </p>
          <h2 className="countdown-title">
            Until we say “<em>I do</em>”
          </h2>

          <div className="countdown-grid">
            {units.map((u) => (
              <div className="countdown-item" key={u.label}>
                <span className="countdown-number">{u.value}</span>
                <span className="countdown-label">{u.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- RSVP ---------- */}
      <section className="rsvp" style={{ backgroundImage: `url(${rsvpBg})` }}>
        <div className="rsvp-frame"></div>

        <div className="rsvp-card">
          <p className="eyebrow eyebrow--brown">AN INVITATION TO CELEBRATE</p>
          <h2 className="rsvp-title">RSVP</h2>

          <div className="envelope">
            <div className="envelope-flap"></div>
            <div className="envelope-seal">
              <span>CG</span>
            </div>
          </div>

          <a href={RSVP_LINK} className="rsvp-link">
            OPEN YOUR INVITATION <span>↗</span>
          </a>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        <p className="footer-mono">C &amp; G</p>
        <p className="footer-text">
          CATHERINE &amp; GILBERTO JR. · SEPTEMBER 4, 2027
        </p>
      </footer>
    </div>
  );
};

export default Details;