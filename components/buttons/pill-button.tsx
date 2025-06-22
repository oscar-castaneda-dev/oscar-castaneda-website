import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function PillButton({ children, className, ...props }: PillButtonProps) {
  return (
    <Button
      variant="outline"
      className={cn("rounded-full cursor-pointer", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
