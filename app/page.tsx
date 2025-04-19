import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="flex items-center gap-x-4 p-4">
      <h1>Hello World</h1>
      <ModeToggle />
    </div>
  );
}
