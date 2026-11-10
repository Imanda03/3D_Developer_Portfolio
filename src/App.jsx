import {
  About,
  Background,
  Contact,
  ContactDock,
  Experience,
  Feedbacks,
  Footer,
  Hero,
  Marquee,
  Navbar,
  Playground,
  Tech,
  Works,
} from "./components";
import useSmoothScroll from "./hooks/useSmoothScroll";

const App = () => {
  useSmoothScroll();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Background />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Works />
        <About />
        <Experience />
        <Tech />
        <Playground />
        <Feedbacks />
        <Contact />
      </main>
      <Footer />
      <ContactDock />
    </>
  );
};

export default App;
