import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

type LandingScrollChromeProps = {
  backgroundImageUrl: string;
};

/**
 * Document scroll parallax on the hero image + top read progress (corporate / TM-style motion).
 */
export function LandingScrollChrome({ backgroundImageUrl }: LandingScrollChromeProps) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: reduce ? 200 : 90,
    damping: reduce ? 200 : 28,
    restDelta: 0.0008,
  });

  const bgY = useTransform(smooth, [0, 1], ["0%", "14%"]);
  const bgScale = useTransform(smooth, [0, 1], [1, 1.06]);
  const scrimLift = useTransform(smooth, [0, 0.35], [0, -18]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left pointer-events-none"
        style={{
          scaleX: smooth,
          background: "linear-gradient(90deg, #2563eb, #1d4ed8, #dc2626)",
        }}
        aria-hidden
      />

      <motion.div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat w-screen h-screen will-change-transform"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
          zIndex: 0,
          top: "var(--header-height, 65px)",
          y: reduce ? 0 : bgY,
          scale: reduce ? 1 : bgScale,
        }}
        aria-hidden
      />

      <motion.div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          top: "var(--header-height, 65px)",
          y: reduce ? 0 : scrimLift,
        }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-white/35 to-slate-100/45" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/[0.06] via-transparent to-red-600/[0.05]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_-10%,rgba(255,255,255,0.55),transparent_55%)]" />
      </motion.div>
    </>
  );
}
