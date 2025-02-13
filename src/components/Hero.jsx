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
    const CV_URL = "https://docs.google.com/document/d/1lHiOnn_P1hCyfu7yyeSnEhUrkKZzZDr0/export?format=pdf";
    
    const link = document.createElement("a");
    link.href = CV_URL;
    link.download = "Anish_Sharma_CV.pdf";
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

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Anish Sharma</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2  text-white-100`}>
            I develop web applications
            <br className="sm:block hidden" />
            <span className="text-[23px]">and mobile applications </span>
          </p>
        </div>
      </div>

      {!isMobile ? (
        <ComputersCanvas isMobile={isMobile} />
      ) : (
        <div className="absolute inset-0 flex flex-col top-44 items-center justify-center px-6 text-center">
        
          {/* Floating Cards with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md space-y-6"
          >
            {/* Welcome Card with enhanced design */}
            <motion.div 
              className="backdrop-blur-xl bg-gradient-to-br  "
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome To My Portfolio
              </motion.h3> */}
              <motion.div 
                className="flex flex-wrap gap-3 justify-center text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-white/90">You're on the mobile version.</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#915eff] to-[#6a3fcf] font-semibold">
                  For a stunning experience, visit on a larger screen! ✨
                </span>
              </motion.div>
            </motion.div>

            {/* Animated Stats Section */}
            {/* <motion.div 
              className="grid grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { label: "Projects", value: "20+", icon: "🎯" },
                { label: "Experience", value: "3 Years", icon: "⚡" },
                { label: "Clients", value: "15+", icon: "🤝" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl font-bold text-[#915eff]">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Enhanced Glowing Button */}
            <motion.div 
            className="mt-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#915eff] via-[#6a3fcf] to-[#3a1f99] flex items-center justify-center shadow-2xl"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(145, 94, 255, 0)",
                "0 0 30px 15px rgba(145, 94, 255, 0.4)",
                "0 0 0 0 rgba(145, 94, 255, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <p className="text-white text-3xl">🚀</p>
          </motion.div>
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