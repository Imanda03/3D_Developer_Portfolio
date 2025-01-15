import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Anish Sharma</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications
            <br className="sm:block hidden" />
            <span className="text-[23px]">and mobile applications </span>
          </p>
        </div>
      </div>
      {/* Pass isMobile prop to ComputersCanvas */}
      {!isMobile ? (
        <ComputersCanvas isMobile={isMobile} />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white text-center text-lg sm:text-xl md:text-2xl font-semibold mb-12 mt-20">
            Welcome to My Portfolio!
            <br />
            <span className="text-gray-300 font-light">
              For a better experience, please view on a larger screen.
            </span>
          </p>
          <div className="w-28 h-28 rounded-full bg-[#915eff] flex items-center justify-center shadow-lg transform hover:scale-110 hover:shadow-2xl transition duration-300">
            <p className="text-white text-3xl">🎨</p>
          </div>
        </div>
      )}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
