interface CardProps {
  children: React.ReactNode;
  area: string;
}

export function Card({ children, area }: CardProps) {
  return (
    <div
      className="bg-card border border-border rounded-lg p-5 flex flex-col justify-between min-h-40"
      style={{ gridArea: area }}
    >
      {children}
    </div>
  );
}
