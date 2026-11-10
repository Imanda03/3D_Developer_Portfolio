const ease = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0, distance = 28) => ({
  hidden: { opacity: 0, y: distance },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
});



export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});
