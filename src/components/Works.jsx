import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-2xl hover:shadow-[#915eff]/30 transition-all duration-300 border border-transparent hover:border-[#915eff]/30"
      >
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <motion.img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#915eff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <motion.div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-r hover:from-[#915eff] hover:to-[#6a3fcf] transition-all duration-300 group/btn"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain group-hover/btn:brightness-0 group-hover/btn:invert transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#915eff] group-hover:to-[#6a3fcf] transition-all duration-300">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] group-hover:text-white/90 transition-colors duration-300">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <motion.p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} px-2 py-1 rounded-md bg-tertiary/50 group-hover:bg-tertiary/80 transition-colors duration-300`}
              whileHover={{ scale: 1.1 }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
