import { cn } from "@/lib/utils";

interface RiskGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function RiskGauge({ score, size = "md", showLabel = true }: RiskGaugeProps) {
  const getRiskLevel = (score: number) => {
    if (score <= 30) return { level: "Low", color: "text-green-400", bg: "bg-green-400" };
    if (score <= 60) return { level: "Medium", color: "text-yellow-400", bg: "bg-yellow-400" };
    return { level: "High", color: "text-red-400", bg: "bg-red-400" };
  };

  const risk = getRiskLevel(score);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-40 h-40",
  };

  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={cn("relative", sizeClasses[size])}>
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted/30"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={risk.color}
            style={{
              transition: "stroke-dashoffset 1s ease-in-out",
              filter: `drop-shadow(0 0 6px currentColor)`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-bold", textSizeClasses[size], risk.color)}>
            {score}
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Risk
          </span>
        </div>
      </div>
      {showLabel && (
        <span className={cn("text-sm font-medium", risk.color)}>
          {risk.level} Risk
        </span>
      )}
    </div>
  );
}
