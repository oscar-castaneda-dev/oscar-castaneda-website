interface ProgressBarProps {
  total: number;
  filled: number;
  filledClassName?: string;
}

export function ProgressBar({
  total,
  filled,
  filledClassName = "bg-green-400",
}: ProgressBarProps) {
  return (
    <div className="flex gap-0.5 group">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 transition-all duration-200 ${index < filled ? `${filledClassName} group-hover:brightness-150` : "bg-border group-hover:bg-outline"}`}
        />
      ))}
    </div>
  );
}
