import { lazy } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Em from "./ui/Em";
import SceneMount from "./canvas/SceneMount";
import useMediaQuery from "../hooks/useMediaQuery";
import { games } from "../constants";
import { fadeUp, stagger } from "../utils/motion";

const ArcadeCanvas = lazy(() => import("./canvas/ArcadeCanvas"));

const Playground = () => {
  const lite = useMediaQuery("(max-width: 768px), (pointer: coarse)");
  return (
    <>
      <SectionHeader
        index="05"
        label="Playground"
        lines={[
          "Games I build",
          <>
            for <Em className="text-accent">fun</Em>.
          </>,
        ]}
        lead="Side quests in game loops, collision and rendering. All free to play in the browser."
      />

      <div className="mt-10 grid items-center gap-8 lg:mt-16 lg:grid-cols-12">
        <motion.div variants={fadeUp()} className="-mx-5 sm:mx-0 lg:col-span-6">
          <SceneMount
            className="h-[340px] sm:h-[440px] lg:h-[560px]"
            label="A floating 3D gamepad with Bit hopping on top, neon bricks above and a glowing snake circling below."
          >
            {(frameloop) => <ArcadeCanvas frameloop={frameloop} lite={lite} />}
          </SceneMount>
        </motion.div>

        <motion.ul variants={stagger(0.1)} className="border-b border-white/15 lg:col-span-6">
          {games.map((game) => (
            <motion.li key={game.name} variants={fadeUp()}>
              <a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[108px_1fr] gap-5 border-t border-white/15 py-6 sm:grid-cols-[176px_1fr] sm:gap-7"
              >
                <span className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/10">
                  <img
                    src={game.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </span>
                <span className="min-w-0">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: game.accent }}>
                    {game.tagline}
                  </span>
                  <span className="mt-1 flex items-center gap-2 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                    {game.name}
                    <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover:rotate-45 group-hover:text-accent" />
                  </span>
                  <span className="mt-2 hidden text-sm leading-relaxed text-muted sm:block">{game.description}</span>
                  <span className="mt-3 inline-block font-mono text-[11px] text-muted">{game.controls}</span>
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

const PlaygroundSection = () => (
  <Section id="playground">
    <Playground />
  </Section>
);

export default PlaygroundSection;
