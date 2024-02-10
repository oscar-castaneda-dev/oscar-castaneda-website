import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

interface IProps {}

export function Navbar(props: IProps) {
  const {} = props;

  return (
    <nav className="w-full relative flex items-center justify-between py-5">
      <Link href="/" className="font-bold text-3xl text-primary">
        O.
      </Link>
      <ThemeToggle />
    </nav>
  );
}
