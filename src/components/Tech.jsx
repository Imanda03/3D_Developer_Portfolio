import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechIcon = ({ icon, name, index, isDesktop }) => (
  <motion.div
    className={`${isDesktop ? "w-28 h-28" : "w-24 h-24"} flex flex-col items-center justify-center`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    whileHover={{ scale: 1.1 }}
  >
    <div className="w-full h-full flex items-center justify-center">
      {isDesktop ? (
        <BallCanvas icon={icon} />
      ) : (
        <img
          src={icon}
          alt={name}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
      )}
    </div>
    {!isDesktop && (
      <p className="mt-2 text-sm text-gray-300 text-center">{name}</p>
    )}
  </motion.div>
);

const Tech = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (event) => setIsDesktop(event.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <TechIcon
          key={technology.name}
          icon={technology.icon}
          name={technology.name}
          index={index}
          isDesktop={isDesktop}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
