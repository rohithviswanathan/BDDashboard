import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type ScrollLazySectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Reserve height before mount to limit layout shift */
  placeholderClassName?: string;
  /** Intersection root margin — positive loads before the section enters view */
  rootMargin?: string;
};

/**
 * Mounts children only after the user scrolls near this block (TM-style progressive load).
 */
export function ScrollLazySection({
  children,
  id,
  className,
  placeholderClassName,
  rootMargin = "280px 0px 240px 0px",
}: ScrollLazySectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin,
    threshold: 0,
  });

  return (
    <div ref={ref} id={id} className={cn(className)}>
      {inView ? (
        children
      ) : (
        <div
          className={cn(
            "min-h-[42vh] md:min-h-[48vh] rounded-2xl border border-slate-200/30 bg-gradient-to-br from-white/25 via-slate-50/20 to-blue-50/15 backdrop-blur-[2px]",
            "motion-safe:animate-[shimmer-placeholder_2.4s_ease-in-out_infinite]",
            placeholderClassName
          )}
          aria-hidden
        />
      )}
    </div>
  );
}
