import "./bridal-party.css";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "TRAVEL", href: "/travel" },
  { label: "ITINERARY", href: "/itinerary" },
  { label: "REGISTRY", href: "/registry" },
  { label: "FAQ'S", href: "/faqs" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "BRIDAL PARTY", href: "/bridal-party", active: true },
];

const BRIDESMAIDS = {
  title: "The Bridesmaids",
  tone: "pink",
  featuredRole: "MAID OF HONOR",
  featured: "Danielle Rodriguez",
  role: "BRIDESMAID",
  members: [
    "Maria Zuniga",
    "Vallerie Bello",
    "Jessica Otalora",
    "Adriana Molina",
    "Chastity Delgado",
    "Jessica Llanes",
  ],
};

const GROOMSMEN = {
  title: "The Groomsmen",
  tone: "sage",
  featuredRole: "BEST MAN",
  featured: "Joey Rodriguez",
  role: "GROOMSMAN",
  members: [
    "Alain Aguiar",
    "Jose Cuervo",
    "Mike Iglesia",
    "Jon-Michael Barquin",
    "David Barquin",
    "Jorge Fleites",
    "Frank Rigueiro",
  ],
};

const PartySection = ({ data }) => (
  <section className={`bp-section bp-section--${data.tone}`}>
    <div className="bp-section-inner">
      <span className="bp-tick"></span>
      <h2 className="bp-section-title">{data.title}</h2>

      <div className="bp-featured">
        <p className="bp-role">{data.featuredRole}</p>
        <p className="bp-script bp-script--lg">{data.featured}</p>
      </div>

      <div className="bp-grid">
        {data.members.map((name) => (
          <div className="bp-card" key={name}>
            <p className="bp-role">{data.role}</p>
            <p className="bp-script">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BridalParty = () => {
  return (
    <div className="bridal-party">
   

      {/* ---------- HERO ---------- */}
      <section className="bp-hero">
        <div className="bp-hero-frame">
          <p className="bp-eyebrow">BY OUR SIDE</p>
          <h1 className="bp-hero-title">
            Our <em>Bridal Party</em>
          </h1>
          <p className="bp-hero-sub">
            The people who make every chapter a little more special.
          </p>
        </div>
      </section>

      {/* ---------- BRIDESMAIDS / GROOMSMEN ---------- */}
      <PartySection data={BRIDESMAIDS} />
      <PartySection data={GROOMSMEN} />

      {/* ---------- FOOTER ---------- */}
      <footer className="bp-footer">
        <p className="bp-footer-mono">C &amp; G</p>
        <p className="bp-footer-text">
          CATHERINE &amp; GILBERTO JR. · SEPTEMBER 4, 2027
        </p>
      </footer>
    </div>
  );
};

export default BridalParty;