import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { Download } from "lucide-react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleDownloadCV = () => {
  // Replace with the actual document ID
  const CV_URL = "https://docs.google.com/document/d/1lHiOnn_P1hCyfu7yyeSnEhUrkKZzZDr0/export?format=pdf";
  
  const link = document.createElement("a");
  link.href = CV_URL;
  link.download = "Anish_Sharma_CV.pdf"; // Set a custom filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* CV Download Button */}
      <div className="absolute top-20 right-10 z-10">
        <button
          onClick={handleDownloadCV}
          className="flex items-center gap-2 bg-transparent hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300"
        >
          <span className="text-white text-lg">My CV</span>
          <Download 
            className="w-5 h-5 text-white hover:text-[#915eff] transition-colors duration-300" 
          />
        </button>
      </div>

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

      {!isMobile ? (
        <ComputersCanvas isMobile={isMobile} />
      ) : (
       <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          {/* Glassmorphic Welcome Card */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg animate-fadeIn">
            <p className="text-white text-2xl sm:text-3xl font-extrabold leading-snug">
              Welcome to 
              <span className="text-[#915eff]"> My Portfolio!</span>
            </p>

            <p className="text-gray-300 text-sm font-medium mt-2 opacity-90">
              You're on the mobile version. For a **stunning** experience, visit on a larger screen! ✨
            </p>
          </div>

          {/* Glowing Animated Button */}
          <div className=" w-24 h-24 rounded-full bg-gradient-to-br from-[#915eff] via-[#6a3fcf] to-[#3a1f99] flex items-center justify-center shadow-2xl transition transform hover:scale-110 hover:shadow-purple-500/50 active:scale-95 animate-bounce">
            <p className="text-white text-4xl drop-shadow-lg">🚀</p>
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