import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { Download, Gamepad2, ChevronDown } from "lucide-react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showGamesList, setShowGamesList] = useState(false);

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
    const CV_URL = "https://1drv.ms/b/s!AsL4K5r2E9I4sQPRNm0kYD6mH92W?e=jasO0m";

    const link = document.createElement("a");
    link.href = CV_URL;
    link.download = "Anish_Sharma_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const games = [
    {
      name: "Brick Brew Game",
      url: "https://brickgame.anish-sharma.com.np",
      icon: "🎮",
    },
    {
      name: "Neon Runner",
      url: "https://neonrunner.anish-sharma.com.np/",
      icon: "⚡",
    },
    {
      name: "Neo Snake",
      url: "https://snake.anish-sharma.com.np",
      icon: "🐍",
    },
  ];
  //   // Update this to the correct filename of your CV in your local folder
  //   const CV_URL = "./anish-sharma-cv.pdf";

  //   const link = document.createElement("a");
  //   link.href = CV_URL;
  //   link.download = "Anish_Sharma_CV.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* CV Download Button & Games Button */}
      <div className="absolute top-20 right-4 sm:right-10 z-10 flex flex-col gap-2 sm:gap-3 items-end">
        {/* CV Button */}
        <button
          onClick={handleDownloadCV}
          className="flex items-center gap-1 sm:gap-2 bg-transparent hover:bg-white/10 px-2 sm:px-4 py-2 rounded-lg transition-all duration-300"
        >
          <span className="text-white text-sm sm:text-lg">My CV</span>
          <Download className="w-4 sm:w-5 h-4 sm:h-5 text-white hover:text-[#915eff] transition-colors duration-300" />
        </button>

        {/* Games Button with Dropdown */}
        <div className="relative">
          <motion.button
            onClick={() => setShowGamesList(!showGamesList)}
            className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#915eff]/20 to-[#6a3fcf]/20 hover:from-[#915eff]/40 hover:to-[#6a3fcf]/40 px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 border border-[#915eff]/30 hover:border-[#915eff]/60"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Gamepad2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#915eff]" />
            <span className="text-white text-sm sm:text-lg">Games</span>
            <ChevronDown
              className="w-4 sm:w-5 h-4 sm:h-5 text-[#915eff] transition-transform duration-300"
              style={{
                transform: showGamesList ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </motion.button>

          {/* Games Dropdown Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={
              showGamesList
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: -10, scale: 0.95 }
            }
            transition={{ duration: 0.2 }}
            className={`absolute top-full right-0 mt-2 w-48 sm:w-64 backdrop-blur-xl bg-gradient-to-b from-[#0f0f1e]/95 to-[#1a1a2e]/95 border border-[#915eff]/50 rounded-xl overflow-hidden shadow-2xl ${
              showGamesList ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <div className="p-2 space-y-2">
              {games.map((game, index) => (
                <motion.a
                  key={index}
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#915eff]/10 to-[#6a3fcf]/10 hover:from-[#915eff]/30 hover:to-[#6a3fcf]/30 border border-[#915eff]/20 hover:border-[#915eff]/50 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg sm:text-2xl">{game.icon}</span>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-xs sm:text-sm group-hover:text-[#915eff] transition-colors">
                      {game.name}
                    </p>
                  </div>
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 text-[#915eff] group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6v12h4m0 0l8-8m-8 8l-4-4m4 4v6m0-12h4v12h-4"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
            <div className="px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-[#915eff]/5 to-[#6a3fcf]/5 border-t border-[#915eff]/20">
              <p className="text-[#915eff]/70 text-xs">Click to play 🎮</p>
            </div>
          </motion.div>
        </div>
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
          <div className="mt-2 relative">
            <motion.p
              className={`${styles.heroSubText} text-white-100 relative z-10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                I develop{" "}
              </motion.span>
              <motion.span
                className="inline-block relative ml-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#915eff] via-[#6a3fcf] to-[#915eff] bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent text-glow">
                    web applications
                  </span>
                  <span className="relative bg-gradient-to-r from-[#915eff] via-[#6a3fcf] to-[#915eff] bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent">
                    web applications
                  </span>
                </span>
              </motion.span>
              <br className="sm:block hidden" />
              <motion.span
                className="inline-block text-[23px] sm:text-[27px]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              >
                <span className="text-white/80">and </span>
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#915eff] to-[#00d4ff] bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent text-glow">
                    mobile applications
                  </span>
                  <span className="relative bg-gradient-to-r from-[#00d4ff] via-[#915eff] to-[#00d4ff] bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent">
                    mobile applications
                  </span>
                </motion.span>
              </motion.span>
            </motion.p>

            {/* Animated background glow effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-[#915eff]/20 via-[#6a3fcf]/20 to-[#00d4ff]/20 rounded-2xl blur-2xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating particles effect */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#915eff] rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 2) * 80}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {!isMobile ? (
        <ComputersCanvas isMobile={isMobile} />
      ) : (
        <div className="absolute inset-0 flex flex-col top-44 items-center justify-center px-6 text-center">
          {/* Dancing Man - Small animation at the side */}
          {/* <motion.div
            className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="text-3xl sm:text-4xl"
              animate={{
                rotate: [0, 10, -10, 10, -10, 0],
                y: [0, -10, 0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              🕺
            </motion.div>
          </motion.div> */}

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
                <span className="text-white/90">
                  You're on the mobile version.
                </span>
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
                "0 0 0 0 rgba(145, 94, 255, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
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
