import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import FloatingParticles from "./components/FloatingParticles";
import FloatingSocialBar from "./components/FloatingSocialBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <FloatingParticles />
        <FloatingSocialBar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/50 pointer-events-none" />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
