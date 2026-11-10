import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Cover from "./ui/Cover";
import Em from "./ui/Em";
import TechGlyph from "./ui/TechGlyph";
import useMediaQuery from "../hooks/useMediaQuery";
import { projects } from "../constants";
import { fadeUp } from "../utils/motion";

const featured = projects.filter((p) => p.kind === "professional");
const side = projects.filter((p) => p.kind === "personal");
const pad = (n) => String(n).padStart(2, "0");
const host = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const COVER_TONES = ["cobalt", "tangerine", "ice"];

const Media = ({ project }) => {
  const inner = (
    <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-elev ring-1 ring-white/10">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} — homepage screenshot`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
        />
      ) : (
        <Cover name={project.name} tags={project.tags} note="Private build" />
      )}
    </div>
  );
  return project.live ? (
    <a href={project.live} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
      {inner}
    </a>
  ) : (
    inner
  );
};

const FeaturedRow = ({ project, i }) => (
  <motion.article
    variants={fadeUp()}
    className="group grid gap-7 border-t border-white/15 py-10 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:py-16"
  >
    <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
      <Media project={project} />
    </div>
    <div className="flex flex-col justify-between gap-8 lg:col-span-5 lg:py-1">
      <div className="label flex items-center justify-between">
        <span>
          {pad(i + 1)} / {pad(featured.length)}
        </span>
        <span>Built at {project.org}</span>
      </div>
      <div>
        <h3 className="text-[clamp(38px,4.6vw,68px)] font-medium leading-[0.95] tracking-[-0.045em]">{project.name}</h3>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{project.description}</p>
      </div>
      <div className="flex flex-col gap-6">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-fg/85">
          {project.tags.map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <TechGlyph name={t} className="h-3.5 w-3.5 text-muted" />
              {t}
            </li>
          ))}
        </ul>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex w-fit items-center gap-1.5 text-lg text-accent"
          >
            {host(project.live)} <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover:rotate-45" />
          </a>
        ) : (
          <span className="label">Not public yet</span>
        )}
      </div>
    </div>
  </motion.article>
);

const SideIndex = () => {
  const [hovered, setHovered] = useState(null);
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28 });
  const sy = useSpring(y, { stiffness: 260, damping: 28 });

  return (
    <div
      className="mt-24 sm:mt-32"
      onPointerMove={(e) => {
        x.set(e.clientX - 160);
        y.set(e.clientY - 105);
      }}
    >
      <motion.div variants={fadeUp()} className="flex items-end justify-between gap-6">
        <h3 className="text-[clamp(30px,3.4vw,48px)] font-medium tracking-[-0.04em]">
          Side <Em>projects</Em>
        </h3>
        <p className="label hidden sm:block">Open source · GitHub</p>
      </motion.div>

      <ul className="mt-8 border-b border-white/15" onPointerLeave={() => setHovered(null)}>
        {side.map((p, i) => (
          <motion.li key={p.name} variants={fadeUp()} onPointerEnter={() => setHovered(i)}>
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-2 border-t border-white/15 py-6 transition-colors duration-300 hover:text-accent sm:py-7 lg:grid-cols-12"
            >
              <span className="font-mono text-[11px] text-muted lg:col-start-1 lg:col-end-2 lg:row-start-1">{pad(i + 1)}</span>
              <span className="text-2xl font-medium tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:col-start-2 lg:col-end-6 lg:row-start-1">
                {p.name}
              </span>
              <ArrowUpRight
                className="h-5 w-5 self-center justify-self-end transition duration-300 group-hover:rotate-45 lg:col-start-12 lg:col-end-13 lg:row-start-1"
                aria-hidden="true"
              />
              <span className="col-start-2 col-end-4 text-sm leading-relaxed text-muted lg:col-start-6 lg:col-end-10 lg:row-start-1">
                {p.description}
              </span>
              <span className="col-start-2 col-end-4 font-mono text-[11px] uppercase tracking-[0.1em] text-muted lg:col-start-10 lg:col-end-12 lg:row-start-1">
                {p.tags.join(" / ")}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>

      {finePointer && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-40 h-[210px] w-[320px] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10"
          style={{ x: sx, y: sy }}
          animate={{ opacity: hovered === null ? 0 : 1, scale: hovered === null ? 0.85 : 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          {side.map((p, i) => (
            <div
              key={p.name}
              className="absolute inset-0 transition-opacity duration-300"
              style={{ opacity: hovered === i ? 1 : 0 }}
            >
              {p.image ? (
                <img src={p.image} alt="" className="h-full w-full object-cover" />
              ) : (
                <Cover name={p.name} tags={p.tags} note="GitHub" tone={COVER_TONES[i % 3]} compact className="!p-5" />
              )}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const Works = () => (
  <>
    <SectionHeader
      index="01"
      label="Selected work"
      lines={[
        "Products live",
        <>
          in <Em className="text-accent">production</Em>.
        </>,
      ]}
      lead="Platforms I've built and shipped for real customers — from an international LMS to logistics in Nepal."
    />
    <div className="mt-12 border-b border-white/15 sm:mt-16">
      {featured.map((p, i) => (
        <FeaturedRow key={p.name} project={p} i={i} />
      ))}
    </div>
    <SideIndex />
  </>
);

const WorksSection = () => (
  <Section id="work">
    <Works />
  </Section>
);

export default WorksSection;
