import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div
    className="xs:w-[250px] w-full"
    style={{
      animation: `card-reveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.12}s both`,
    }}
  >
    <div
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-2xl hover:shadow-[#915eff]/40 transition-all duration-500 group premium-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden"
      >
        {/* Shimmer effect */}
        <div
          className="absolute inset-0 shimmer-overlay"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#915eff]/20 to-[#6a3fcf]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Glow ring */}
        <div
          className="absolute inset-4 rounded-full border-2 border-[#915eff]/0 group-hover:border-[#915eff]/30 transition-all duration-500 blur-sm"
        />
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain relative z-10 hover:scale-115 transition-transform duration-500 ease-out drop-shadow-lg"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#915eff] group-hover:to-[#6a3fcf] transition-all duration-500">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        I'm a Full-Stack Developer specializing in the MERN stack and React
        Native, with experience building and shipping scalable web and mobile
        applications — from LMS platforms to booking systems. I care about
        clean architecture and fast, seamless user experiences, and I'm
        currently building out an ed-tech platform at KidnCode. Let's build
        something great together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
