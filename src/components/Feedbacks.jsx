import { motion } from "framer-motion";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Em from "./ui/Em";
import { testimonials } from "../constants";
import { fadeUp } from "../utils/motion";

const Feedbacks = () => (
  <>
    <SectionHeader index="✳" label="Kind words" lines={[<>What people <Em className="text-accent">say</Em>.</>]} />
    <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t) => (
        <motion.li key={t.name} variants={fadeUp()} className="bg-ink">
          <figure className="flex h-full flex-col p-8">
            <blockquote className="flex-1 font-serif text-2xl italic leading-snug">“{t.quote}”</blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              {t.avatar && <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />}
              <span>
                <span className="block text-sm font-medium">{t.name}</span>
                <span className="block text-xs text-muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        </motion.li>
      ))}
    </ul>
  </>
);

// Only rendered once real testimonials are added in constants.
const Testimonials = () =>
  testimonials.length ? (
    <Section id="testimonials">
      <Feedbacks />
    </Section>
  ) : null;

export default Testimonials;
