interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <div className="px-2.5 py-1 border border-outline rounded-sm">
      <span className="text-xs">{children}</span>
    </div>
  );
}
