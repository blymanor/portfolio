export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: EASE },
  },
});
