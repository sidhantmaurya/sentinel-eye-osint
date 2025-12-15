import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = true, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6",
        hover && "glass-hover",
        glow && "cyber-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
