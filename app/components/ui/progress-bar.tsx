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
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 ${index < filled ? filledClassName : "bg-border"}`}
        />
      ))}
    </div>
  );
}
