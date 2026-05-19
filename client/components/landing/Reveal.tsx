import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

/** Editorial ease — smooth, not bouncy */
export const landingEase = [0.22, 1, 0.36, 1] as const;

export type RevealVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "zoom" | "clip";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  /** Vertical offset for fadeUp (default 20) */
  y?: number;
  className?: string;
  variant?: RevealVariant;
  /** Viewport intersection ratio before triggering */
  amount?: number | "some" | "all";
  once?: boolean;
};

const variantHidden = (
  variant: RevealVariant,
  y: number
): Record<string, number | string> => {
  switch (variant) {
    case "fadeLeft":
      return { opacity: 0, x: -36 };
    case "fadeRight":
      return { opacity: 0, x: 36 };
    case "zoom":
      return { opacity: 0, scale: 0.94 };
    case "clip":
      return { opacity: 0, y: y * 0.6, clipPath: "inset(12% 8% 12% 8%)" };
    case "fadeUp":
    default:
      return { opacity: 0, y };
  }
};

const variantVisible: Record<RevealVariant, Record<string, number | string>> = {
  fadeUp: { opacity: 1, y: 0 },
  fadeLeft: { opacity: 1, x: 0 },
  fadeRight: { opacity: 1, x: 0 },
  zoom: { opacity: 1, scale: 1 },
  clip: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
};

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  variant = "fadeUp",
  amount = 0.12,
  once = true,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={variantHidden(variant, y)}
      whileInView={variantVisible[variant]}
      viewport={{
        once,
        amount,
        margin: "0px 0px -14% 0px",
      }}
      transition={{
        duration: variant === "zoom" ? 0.68 : 0.74,
        delay,
        ease: landingEase,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
