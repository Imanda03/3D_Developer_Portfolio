import { motion } from "framer-motion";

const line = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

// Headline lines that slide up out of a mask, one after another.
const RevealLines = ({ as: Tag = "h2", lines, className = "" }) => (
  <Tag className={className}>
    {lines.map((content, i) => (
      <span key={i} className="-mb-[0.12em] block overflow-hidden pb-[0.12em] pr-[0.08em]">
        <motion.span className="block" variants={line}>
          {content}
        </motion.span>
      </span>
    ))}
  </Tag>
);

export default RevealLines;
