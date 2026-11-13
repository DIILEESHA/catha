
import { NavLink } from "react-router-dom";
import "./nav.css";

// Other existing code...

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "TRAVEL", href: "/travel" },
  { label: "ITINERARY", href: "/itinerary" },
  { label: "REGISTRY", href: "/registry" },
  { label: "FAQ'S", href: "/faqs" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "BRIDAL PARTY", href: "/bridal-party" },
];

const Itinerary = () => {
  return (
    <div className="itinerary">

      {/* NAV */}
      <header className="it-nav">
        <NavLink to="/" end className="it-nav-logo">
          CG
        </NavLink>

        <nav className="it-nav-links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Your existing itinerary content here */}

    </div>
  );
};

export default Itinerary;
