import { motion } from "framer-motion";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Em from "./ui/Em";
import TechGlyph from "./ui/TechGlyph";
import { experiences } from "../constants";
import { fadeUp } from "../utils/motion";

const Role = ({ role }) => (
  <motion.li variants={fadeUp()} className="grid gap-6 border-t border-white/15 py-10 sm:py-12 lg:grid-cols-12 lg:gap-8">
    <div className="flex items-center justify-between gap-4 lg:col-span-3 lg:flex-col lg:items-start lg:justify-start">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{role.date}</p>
      {role.current && (
        <p className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
          Current
        </p>
      )}
    </div>

    <div className="flex items-start gap-4 lg:col-span-4">
      <span
        className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl p-1.5"
        style={{ background: role.logoBg }}
      >
        <img src={role.logo} alt={`${role.company} logo`} loading="lazy" className="h-full w-full object-contain" />
      </span>
      <div>
        <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-[28px]">{role.title}</h3>
        <p className="mt-1.5 text-muted">
          {role.company}
          {role.companyNote && <span className="text-muted/70"> · {role.companyNote}</span>}
        </p>
      </div>
    </div>

    <div className="lg:col-span-5">
      <ul className="space-y-3">
        {role.points.map((point) => (
          <li key={point} className="flex gap-3 leading-relaxed text-muted">
            <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-fg/85">
        {role.stack.map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <TechGlyph name={t} className="h-3.5 w-3.5 text-muted" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  </motion.li>
);

const Experience = () => (
  <>
    <SectionHeader
      index="03"
      label="Experience"
      lines={[
        "Since 2022,",
        <>
          across three <Em className="text-ice">teams</Em>.
        </>,
      ]}
    />
    <ol className="mt-12 border-b border-white/15 sm:mt-16">
      {experiences.map((role) => (
        <Role key={role.company} role={role} />
      ))}
    </ol>
  </>
);

const ExperienceSection = () => (
  <Section id="experience">
    <Experience />
  </Section>
);

export default ExperienceSection;
