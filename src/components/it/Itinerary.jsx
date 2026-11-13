import "./itinerary.css";
// import cosa from "../../assets/van.png"
/* ====== REPLACE THESE PATHS / LINKS (files go in /public) ====== */
const IMG = {
  hero: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/itinerary/catherine-gilberto-header.jpg",
  deriva: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/itinerary/la-deriva-welcome.png",
  chiva: "../../assets/van.png",
  vivareMain: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/itinerary/vivare-hero.webp",
  vivareA: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/itinerary/vivare-hall.webp",
  vivareB: "https://catherine-gilberto-wedding.catmora94.chatgpt.site/assets/itinerary/vivare-garden.webp",
};
const LINKS = {
  deriva: "https://www.clickclackhotel.com/en/hotel-clickclackmedellin-in-medellin/restaurants/drift/",
  guatape: "https://colombia.travel/es/node/4314",
  coffee: "https://www.medellin.travel/agrotourism/?lang=en",
  comuna13: "https://www.medellin.travel/comuna-13-3/?lang=en",
  arvi: "https://www.medellin.travel/medellin-arvi-park/?lang=en",
  vivare: "https://eventosvivare.com/",
  ranchLocation: "https://share.google/o4aFcrJBrPECBDn69",
  ranchSite: "https://elrancherito.com.co/",
};
/* =============================================================== */

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "TRAVEL", href: "/travel" },
  { label: "ITINERARY", href: "/itinerary", active: true },
  { label: "REGISTRY", href: "/registry" },
  { label: "FAQ'S", href: "/faqs" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "BRIDAL PARTY", href: "/bridal-party" },
];

const DAYS = [
  { label: "THURSDAY · 02", href: "#day-02" },
  { label: "FRIDAY · 03", href: "#day-03" },
  { label: "SATURDAY · 04", href: "#day-04" },
  { label: "SUNDAY · 05", href: "#day-05" },
];

const IDEAS = [
  {
    eyebrow: "A COLORFUL DAY AWAY",
    title: "Guatapé",
    text: "A lakeside town known for its brightly painted streets and decorative panels called zócalos. Wander the town, take a boat ride on the reservoir, or climb nearby Piedra del Peñol for sweeping views of the water and green hills.",
    link: "DISCOVER GUATAPÉ ↗",
    href: LINKS.guatape,
    tone: "cream",
  },
  {
    eyebrow: "FROM BEAN TO CUP",
    title: "A coffee day trip",
    text: "Spend time at a coffee farm in the countryside around Medellín. Learn how coffee is grown, harvested, and processed, then enjoy a tasting and a fresh cup surrounded by greenery.",
    link: "EXPLORE COFFEE EXPERIENCES ↗",
    href: LINKS.coffee,
    tone: "pink",
  },
  {
    eyebrow: "GET TO KNOW THE CITY",
    title: "A Medellín city tour",
    text: "Choose a guided tour to discover Medellín's neighborhoods, local culture, and history. A visit to Comuna 13 offers a chance to learn about its transformation through art, community, and the stories of local guides.",
    link: "LEARN ABOUT COMUNA 13 ↗",
    href: LINKS.comuna13,
    tone: "pink",
  },
  {
    eyebrow: "A BREATH OF FRESH AIR",
    title: "Parque Arví",
    text: "Trade the city bustle for forest trails and mountain air in Santa Elena. Take the scenic Metrocable journey and explore this nature destination with a guided walk or a relaxed afternoon outdoors.",
    link: "EXPLORE PARQUE ARVÍ ↗",
    href: LINKS.arvi,
    tone: "cream",
  },
];

const SectionHead = ({ num, date, children }) => (
  <div className="it-head">
    <span className="it-num">{num}</span>
    <div className="it-head-text">
      <p className="it-eyebrow">{date}</p>
      <h2 className="it-head-title">{children}</h2>
    </div>
  </div>
);

const Itinerary = () => {
  return (
    <div className="itinerary">
      {/* ---------- NAV ---------- */}
     

      {/* ---------- HERO ---------- */}
      <section className="it-hero">
        <div className="it-hero-frame">
          <div className="it-hero-text">
            <p className="it-eyebrow it-eyebrow--gold">
              SEPTEMBER 2–5, 2027 · MEDELLÍN, COLOMBIA
            </p>
            <h1 className="it-hero-title">
              A little love.
              <br />
              <em>A lot of celebrating.</em>
            </h1>
            <p className="it-hero-desc">
              Four days in Colombia with our favorite people. Here’s what we
              have planned—and a little inspiration for making the weekend your
              own.
            </p>
            <div className="it-hero-days">
              {DAYS.map((d) => (
                <a key={d.label} href={d.href}>
                  {d.label}
                </a>
              ))}
            </div>
          </div>

          <div className="it-hero-photo">
            <img src={IMG.hero} alt="Catherine and Gilberto Jr." />
          </div>
        </div>
      </section>

      {/* ---------- 02 THURSDAY ---------- */}
      <section id="day-02" className="it-day it-day--pink">
        <div className="it-wrap">
          <SectionHead num="02" date="THURSDAY · SEPTEMBER 2, 2027">
            Let’s get <em>this started.</em>
          </SectionHead>

          <div className="it-feature">
            <div className="it-photo it-photo--sage">
              <img src={IMG.deriva} alt="La Deriva rooftop" />
            </div>
            <div className="it-feature-text">
              <span className="it-badge">OPTIONAL · EARLY ARRIVALS</span>
              <h3 className="it-feature-title">
                Welcome Party
                <br />
                <em>at La Deriva</em>
              </h3>
              <p>
                Flying in early? Come kick off the weekend with us at La
                Deriva, the rooftop at The Click Clack Hotel. Think drinks, good
                company, and our first cheers in Medellín.
              </p>
              <p>
                This is completely optional—if you’re already in town, we’d
                love to see you!
              </p>
              <p className="it-meta">
                The Click Clack Hotel · El Poblado
                <br />
                Time to be announced
              </p>
              <a href={LINKS.deriva} className="it-link">
                EXPLORE LA DERIVA ↗
              </a>
            </div>
          </div>

          <div className="it-fiesta">
            <div className="it-fiesta-body">
              <p className="it-eyebrow it-eyebrow--red">
                KEEP THE CELEBRATION ROLLING
              </p>
              <h3 className="it-fiesta-title">
                ¡Que siga <em>la fiesta!</em>
              </h3>
              <p>
                We’re also planning a chiva ride for our guests: a colorful
                Colombian party bus taking us around the city with drinks,
                music, and dancing along the way.
              </p>
              <p className="it-meta it-fiesta-meta">
                Departure time, pickup location, and route to be announced.
              </p>
            </div>
            <img className="it-fiesta-img" src={IMG.chiva} alt="Chiva party bus" />
          </div>
        </div>
      </section>

      {/* ---------- 03 FRIDAY ---------- */}
      <section id="day-03" className="it-day it-day--sage">
        <div className="it-wrap">
          <SectionHead num="03" date="FRIDAY · SEPTEMBER 3, 2027">
            Medellín, <em>your way.</em>
          </SectionHead>

          <p className="it-lead">
            No wedding plans today! Sleep in, explore the city, or head out on
            a day trip. Here are a few ideas for your free day.
          </p>

          <div className="it-ideas">
            {IDEAS.map((i) => (
              <article key={i.title} className={`it-idea it-idea--${i.tone}`}>
                <p className="it-eyebrow it-eyebrow--muted">{i.eyebrow}</p>
                <h3>{i.title}</h3>
                <p>{i.text}</p>
                <a href={i.href} className="it-link">
                  {i.link}
                </a>
              </article>
            ))}
          </div>

          <p className="it-note">
            These are ideas for your free day, not organized wedding
            activities. Arrange tours and transportation independently, and
            check current schedules and availability before heading out.
          </p>
        </div>
      </section>

      {/* ---------- 04 SATURDAY ---------- */}
      <section id="day-04" className="it-day it-day--dark">
        <div className="it-wrap">
          <SectionHead num="04" date="SATURDAY · SEPTEMBER 4, 2027">
            The day <em>we say “I do.”</em>
          </SectionHead>

          <div className="it-feature it-feature--wedding">
            <div className="it-feature-text">
              <span className="it-badge">THE WEDDING</span>
              <h3 className="it-feature-title">
                Catherine &amp; Gilberto Jr.
                <br />
                <em>at Vivaré</em>
              </h3>
              <p>
                Our favorite people, one beautiful place, and a whole lot of
                love. Join us at Vivaré for our wedding celebration—and come
                ready to dance!
              </p>
              <p className="it-meta">
                Ceremony and reception · Vivaré
                <br />
                Time and transportation details to be announced
              </p>
              <a href={LINKS.vivare} className="it-link">
                A PEEK AT VIVARÉ ↗
              </a>
            </div>
            <div className="it-venue-main">
              <img src={IMG.vivareMain} alt="Vivaré rendering" />
            </div>
          </div>

          <div className="it-venue-row">
            <div className="it-venue-box">
              <img src={IMG.vivareA} alt="Vivaré rendering" />
            </div>
            <div className="it-venue-box">
              <img src={IMG.vivareB} alt="Vivaré rendering" />
            </div>
          </div>

          <p className="it-note it-note--light">
            A preview of what’s to come: Vivaré is under construction. These
            venue renderings are from Vivaré’s website; the finished spaces may
            vary.
          </p>
        </div>
      </section>

      {/* ---------- 05 SUNDAY ---------- */}
      <div className="it-stripe"></div>
      <section id="day-05" className="it-day it-day--cream">
        <div className="it-wrap">
          <SectionHead num="05" date="SUNDAY · SEPTEMBER 5, 2027">
            Un último <em>cafecito.</em>
          </SectionHead>

          <div className="it-feature it-feature--brunch">
            <div className="it-menu-card">
              <div className="it-menu-inner">
                <p className="it-menu-tiny">SABOR COLOMBIANO</p>
                <h3 className="it-menu-title">El Rancherito</h3>
                <p className="it-menu-tiny">PALMAS</p>
                <span className="it-menu-divider"></span>
                <p className="it-menu-text">
                  Good food.
                  <br />
                  One more coffee.
                  <br />
                  Our favorite people.
                </p>
              </div>
            </div>

            <div className="it-feature-text">
              <span className="it-badge">OPTIONAL · CASUAL MEETUP</span>
              <h3 className="it-feature-title">
                Brunch at
                <br />
                <em>El Rancherito – Palmas</em>
              </h3>
              <p>
                Still in town? Join us for one last cafecito and a relaxed
                Colombian brunch at El Rancherito. Think traditional flavors, a
                warm country-style setting, and plenty of wedding stories
                around the table.
              </p>
              <p>
                Come hungry, take it slow, and squeeze in a few more hugs
                before heading home.
              </p>
              <div className="it-callout">
                A casual, optional meetup. Everyone will order and pay for
                their own meal—join us if it works with your travel plans!
              </div>
              <p className="it-meta">
                El Rancherito – Palmas
                <br />
                Meetup time to be announced
              </p>
              <div className="it-links">
                <a href={LINKS.ranchLocation} className="it-link">
                  VIEW THE LOCATION ↗
                </a>
                <a href={LINKS.ranchSite} className="it-link">
                  EXPLORE EL RANCHERITO ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="it-stripe"></div>
      <div className="it-closing">
        We’ll share event times, transportation details, and any updates as the
        weekend gets closer.
      </div>

      {/* ---------- FOOTER ---------- */}
      <footer className="it-footer">
        <p className="it-footer-mono">C &amp; G</p>
        <p className="it-footer-text">
          CATHERINE &amp; GILBERTO JR. · SEPTEMBER 4, 2027
        </p>
      </footer>
    </div>
  );
};

export default Itinerary;