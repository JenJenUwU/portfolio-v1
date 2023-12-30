import { HashRouter as Router, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  Resume,
  ParticlesCanvas,
} from "./components";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Hero />
                </div>
                <About />
                <Experience />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                  <Contact />
                  <ParticlesCanvas />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
