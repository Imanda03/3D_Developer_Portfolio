import { motion } from "framer-motion";
import { stagger } from "../../utils/motion";

// Each section sits on one of three colour fields; text colours follow the tone.
const TONES = {
  night: "bg-transparent text-fg",
  cobalt: "bg-cobalt text-fg",
  tangerine: "bg-accent text-ink",
};

const Section = ({ id, tone = "night", className = "", children }) => (
  <section id={id} className={`relative ${TONES[tone]}`} data-tone={tone}>
    <motion.div
      variants={stagger()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
      className={`relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:py-40 ${className}`}
    >
      {children}
    </motion.div>
  </section>
);

export default Section;
