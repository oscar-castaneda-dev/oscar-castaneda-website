import { Link } from "@/components/common/link";

export function Logo() {
  return (
    <Link
      className="hover:text-gray-700 dark:hover:text-gray-400 transition-colors hover:no-underline"
      href="/"
      size={20}
      weight="semibold"
    >
      Oscar Castaneda
    </Link>
  );
}
