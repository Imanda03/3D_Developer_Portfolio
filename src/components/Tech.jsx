import { lazy } from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Em from "./ui/Em";
import TechGlyph from "./ui/TechGlyph";
import SceneMount from "./canvas/SceneMount";
import useMediaQuery from "../hooks/useMediaQuery";
import { techGroups } from "../constants/tech";
import { fadeUp, stagger } from "../utils/motion";

const TechCloudCanvas = lazy(() => import("./canvas/TechCloudCanvas"));

const Tech = () => {
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  return (
    <>
      <SectionHeader
        tone="cobalt"
        index="04"
        label="Skills"
        lines={[
          "The everyday",
          <>
            <Em className="text-ice">toolkit</Em>.
          </>,
        ]}
        lead="What I reach for across the stack — from interface details to the pipelines that deploy them."
      />
      <div className="mt-10 grid items-center gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
        <motion.div variants={fadeUp()} className="relative -mx-5 sm:mx-0 lg:col-span-6">
          <SceneMount
            className="h-[360px] sm:h-[460px] lg:h-[560px]"
            label="A slowly rotating 3D sphere of the technology logos I work with."
          >
            {(frameloop) => <TechCloudCanvas frameloop={frameloop} interactive={finePointer} />}
          </SceneMount>
          {finePointer && (
            <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg/70">
              (drag to spin)
            </p>
          )}
        </motion.div>

        <motion.div variants={stagger(0.1)} className="space-y-10 lg:col-span-6">
          {techGroups.map((group) => (
            <motion.div key={group.title} variants={fadeUp()} className="border-t border-white/25 pt-5">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg/75">{group.title}</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3.5 sm:grid-cols-3">
                {group.items.map((name) => (
                  <li key={name} className="flex items-center gap-2.5 text-[17px]">
                    <TechGlyph name={name} className="h-4 w-4 shrink-0 text-ice" />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

const TechSection = () => (
  <Section id="skills" tone="cobalt">
    <Tech />
  </Section>
);

export default TechSection;
