import { Routes, Route } from "react-router-dom";

import BridalParty from "./components/bridal/bridal-party";
import Details from "./components/details/Details";
import Faqs from "./components/faq/Faqs";
import Hero from "./components/hero/Hero";
import Itinerary from "./components/it/Itinerary";
import Nav from "./components/nav/Nav";
import Registry from "./components/registry/Registry";
import OurStory from "./components/story/our-story";
import Travel from "./components/travel/Travel";

const App = () => {
  return (
    <div>

        <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Details />
              {/* <Travel />
              <Itinerary />
              <Registry />
              <Faqs />
              <OurStory />
              <BridalParty /> */}
            </>
          }
        />

        <Route path="/travel" element={<Travel />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/bridal-party" element={<BridalParty />} />
      </Routes>
    </div>
  );
};

export default App;