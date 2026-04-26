import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group font-nothing-code text-title hover:no-underline before:content-['[_'] after:content-['_]']"
    >
      <span className="relative inline-block font-nothing-code uppercase">
        oc
        <span className="absolute bottom-0 left-0 w-full border-b border-title opacity-0 group-hover:opacity-100" />
      </span>
    </Link>
  );
}
