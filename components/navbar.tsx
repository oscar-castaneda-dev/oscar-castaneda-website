import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

interface IProps {}

export function Navbar(props: IProps) {
  const {} = props;

  return (
    <nav className="w-full relative flex items-center justify-between py-5 mb-24">
      <Link href="/" className="text-3xl text-primary font-medium">
        O.
      </Link>
      <ThemeToggle />
    </nav>
  );
}
