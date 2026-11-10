import { motion } from "framer-motion";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Em from "./ui/Em";
import { services, yearsOfExperience } from "../constants";
import { fadeUp, stagger } from "../utils/motion";

const About = () => (
  <>
    <SectionHeader
      index="02"
      label="About"
      lines={[
        "A developer who",
        <>
          cares how things <Em className="text-accent">ship</Em>.
        </>,
      ]}
    />

    <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-8">
      <motion.p
        variants={fadeUp()}
        className="text-[clamp(24px,2.7vw,40px)] leading-[1.28] tracking-[-0.025em] text-fg/90 lg:col-span-9 lg:col-start-4"
      >
        For {yearsOfExperience()}+ years I&apos;ve built <Em className="text-ice">web and mobile products</Em> end to
        end — a multinational LMS, a truck-booking platform for Nepal and business-intelligence tooling for enterprise
        teams. <span className="text-muted">Today I lead the platform at</span> KidnCode
        <span className="text-muted">, from payments and scheduling all the way down to CI/CD.</span>
      </motion.p>

      <motion.ul
        variants={stagger(0.08)}
        className="grid border-t border-white/15 sm:grid-cols-2 lg:col-span-9 lg:col-start-4"
      >
        {services.map((s, i) => (
          <motion.li
            key={s.title}
            variants={fadeUp()}
            className={`border-b border-white/15 py-8 sm:py-10 ${i % 2 === 0 ? "sm:border-r sm:pr-10" : "sm:pl-10"}`}
          >
            <p className="font-mono text-[11px] text-accent">0{i + 1}</p>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] sm:text-[28px]">{s.title}</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-muted">{s.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </>
);

const AboutSection = () => (
  <Section id="about">
    <About />
  </Section>
);

export default AboutSection;
