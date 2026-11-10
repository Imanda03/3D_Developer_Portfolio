import { lazy } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import SceneMount from "./canvas/SceneMount";
import RevealLines from "./ui/RevealLines";
import Em from "./ui/Em";
import useMediaQuery from "../hooks/useMediaQuery";
import useNepalTime from "../hooks/useNepalTime";
import { yearsOfExperience } from "../constants";
import { fadeUp, stagger } from "../utils/motion";

const HeroCanvas = lazy(() => import("./canvas/HeroCanvas"));

const Hero = () => {
  const lite = useMediaQuery("(max-width: 768px), (pointer: coarse)");
  const time = useNepalTime();

  const facts = [
    ["Currently", "Platform Lead, KidnCode"],
    ["Experience", "Shipping since 2022"],
    ["Focus", "React · React Native · Node"],
    ["Local time", `${time} in Nepal`],
  ];

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <motion.div
        variants={stagger(0.12, 0.1)}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-2 px-5 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-12 lg:pt-24"
      >
        <div className="relative z-10 lg:col-span-7">
          <motion.p variants={fadeUp()} className="label flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Anish Sharma — Platform Lead at KidnCode
          </motion.p>

          <RevealLines
            as="h1"
            lines={[
              "Full-stack",
              "engineer for",
              <>
                <Em className="text-accent">web</Em> &amp; <Em className="text-ice">mobile</Em>.
              </>,
            ]}
            className="mt-7 text-[clamp(52px,11vw,124px)] font-medium leading-[0.92] tracking-[-0.05em]"
          />

          <motion.p variants={fadeUp()} className="mt-8 max-w-[34rem] text-lg leading-relaxed text-muted sm:text-xl">
            {yearsOfExperience()}+ years shipping React, React Native and Node products across ed-tech, logistics and
            analytics — and a few browser games on the side.
          </motion.p>

          <motion.div variants={fadeUp()} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn bg-accent text-ink hover:bg-fg">
              Selected work <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href="/Anish_Sharma_CV.pdf" download="Anish_Sharma_CV.pdf" className="btn-line">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp(0.2)} className="relative -mx-5 sm:mx-0 lg:col-span-5">
          <div
            className="pointer-events-none absolute inset-[8%] rounded-full bg-cobalt/30 blur-[90px]"
            aria-hidden="true"
          />
          <SceneMount
            className="h-[400px] sm:h-[520px] lg:h-[680px]"
            label="Byte, a friendly 3D robot, hovers inside a ring while its cube sidekick Bit hops around it."
          >
            {(frameloop) => <HeroCanvas frameloop={frameloop} lite={lite} />}
          </SceneMount>
          <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            ({lite ? "tap" : "click"} the robot)
          </p>
        </motion.div>
      </motion.div>

      <div className="mx-auto w-full max-w-[1400px] px-5 pb-8 pt-6 sm:px-8">
        <dl className="grid grid-cols-2 border-t border-white/15 md:grid-cols-4">
          {facts.map(([label, value], i) => (
            <div
              key={label}
              className={`flex flex-col-reverse gap-1.5 border-white/10 py-5 pr-4 ${
                i % 2 === 0 ? "border-r md:border-r-0" : "pl-4 md:pl-0"
              } ${i > 1 ? "border-t md:border-t-0" : ""}`}
            >
              <dd className="text-sm text-fg sm:text-[15px]">{value}</dd>
              <dt className="label">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
