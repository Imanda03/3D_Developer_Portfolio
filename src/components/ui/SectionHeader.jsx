import { motion } from "framer-motion";
import RevealLines from "./RevealLines";
import { fadeUp } from "../../utils/motion";

// Editorial header: an index label on the left rail, a large headline on the right.
const SectionHeader = ({ index, label, lines, lead, tone = "night" }) => {
  const rule = tone === "tangerine" ? "border-ink/20" : "border-white/15";
  const meta = tone === "tangerine" ? "text-ink/70" : tone === "cobalt" ? "text-fg/75" : "text-muted";
  return (
    <header className={`grid gap-6 border-t pt-6 lg:grid-cols-12 lg:gap-8 ${rule}`}>
      <motion.p variants={fadeUp()} className={`font-mono text-[11px] uppercase tracking-[0.14em] lg:col-span-3 ${meta}`}>
        ({index}) {label}
      </motion.p>
      <div className="lg:col-span-9">
        <RevealLines
          lines={lines}
          className="text-[clamp(40px,6.4vw,104px)] font-medium leading-[0.95] tracking-[-0.045em]"
        />
        {lead && (
          <motion.p variants={fadeUp(0.2)} className={`mt-8 max-w-xl text-lg leading-relaxed ${meta}`}>
            {lead}
          </motion.p>
        )}
      </div>
    </header>
  );
};

export default SectionHeader;
