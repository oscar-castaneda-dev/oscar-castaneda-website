export function BurgerButton({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      aria-label="open menu"
      className="flex flex-col justify-center gap-1.5 p-1 md:hidden"
      {...props}
    >
      <span className="block w-5 h-px bg-white" />
      <span className="block w-5 h-px bg-white" />
      <span className="block w-5 h-px bg-white" />
    </button>
  );
}
