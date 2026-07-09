import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const DEFAULT_COVER = { from: "#915eff", to: "#00d4ff", emoji: "⚡" };

const getCoverTheme = (name, cover) => {
  if (cover) return cover;

  const lower = name.toLowerCase();
  if (lower.includes("lms") || lower.includes("teacher") || lower.includes("kidn"))
    return { from: "#FFD700", to: "#915eff", emoji: "🎓" };
  if (lower.includes("lodbod") || lower.includes("shipment"))
    return { from: "#00d4ff", to: "#6a3fcf", emoji: "🚚" };
  if (lower.includes("concerto") || lower.includes("analytics"))
    return { from: "#38ef7d", to: "#11998e", emoji: "📊" };
  if (lower.includes("store") || lower.includes("shop") || lower.includes("bigdog"))
    return { from: "#f7971e", to: "#ffd200", emoji: "🛒" };
  if (lower.includes("hotel") || lower.includes("macro"))
    return { from: "#667eea", to: "#764ba2", emoji: "🏨" };
  if (lower.includes("note")) return { from: "#f093fb", to: "#f5576c", emoji: "📝" };
  if (lower.includes("library")) return { from: "#4facfe", to: "#00f2fe", emoji: "📚" };
  if (lower.includes("barber")) return { from: "#fa709a", to: "#fee140", emoji: "💈" };

  return DEFAULT_COVER;
};

const ProjectCover = ({ name, tags, cover }) => {
  const theme = getCoverTheme(name, cover);
  const shortName = name.length > 18 ? `${name.slice(0, 16)}…` : name;

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl"
      style={{
        background: `linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #0f0f1e 100%)`,
      }}
    >
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-60"
        style={{ background: theme.from }}
        animate={{ x: [0, 20, 0], y: [0, 15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-12 -right-8 w-44 h-44 rounded-full blur-3xl opacity-50"
        style={{ background: theme.to }}
        animate={{ x: [0, -18, 0], y: [0, -12, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-30"
        style={{ background: `linear-gradient(135deg, ${theme.from}, ${theme.to})` }}
        animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <motion.span
          className="text-5xl drop-shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {theme.emoji}
        </motion.span>
        <p
          className="mt-3 text-white font-bold text-lg leading-tight line-clamp-2"
          style={{
            textShadow: `0 0 24px ${theme.from}88`,
          }}
        >
          {shortName}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5 max-w-[90%]">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag.name}
              className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/20 text-white/80 bg-black/20 backdrop-blur-sm"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-1/3 opacity-40"
        style={{
          background: `linear-gradient(to top, ${theme.to}55, transparent)`,
        }}
      />
    </div>
  );
};

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-white"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  cover,
  live_link,
  source_code_link,
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const showCover = !image || imageFailed;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10 }}
      className="group h-full"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full min-h-[500px] flex flex-col hover:shadow-2xl hover:shadow-[#915eff]/30 transition-all duration-300 border border-transparent hover:border-[#915eff]/30"
      >
        <div className="relative w-full h-[200px] shrink-0 overflow-hidden rounded-2xl">
          {showCover ? (
            <ProjectCover name={name} tags={tags} cover={cover} />
          ) : (
            <motion.img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              onError={() => setImageFailed(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#915eff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {(live_link || source_code_link) && (
            <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
              {live_link && (
                <motion.button
                  type="button"
                  onClick={() => window.open(live_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-r hover:from-[#915eff] hover:to-[#6a3fcf] transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Visit ${name}`}
                >
                  <ExternalLinkIcon />
                </motion.button>
              )}
              {source_code_link && (
                <motion.button
                  type="button"
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-r hover:from-[#915eff] hover:to-[#6a3fcf] transition-all duration-300 group/btn"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View ${name} source code`}
                >
                  <motion.img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain group-hover/btn:brightness-0 group-hover/btn:invert transition-all duration-300"
                  />
                </motion.button>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-col flex-1">
          <h3 className="text-white font-bold text-[20px] line-clamp-2 min-h-[56px] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#915eff] group-hover:to-[#6a3fcf] transition-all duration-300">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13px] leading-[20px] line-clamp-4 min-h-[80px] group-hover:text-white/90 transition-colors duration-300">
            {description}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5 shrink-0 min-h-[56px] content-start">
          {tags.map((tag) => (
            <motion.p
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color} px-2 py-0.5 rounded-md bg-tertiary/50 group-hover:bg-tertiary/80 transition-colors duration-300`}
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
          A mix of professional products shipped at work and personal projects
          that showcase my skills across ed-tech, logistics, business intelligence,
          e-commerce, and full-stack development.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
