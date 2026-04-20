export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container font-nothing-label py-8 flex justify-between items-center">
        <span className="flex items-center text-muted">
          {new Date().getFullYear()} OSCAR CASTANEDA
        </span>
        <div className="flex gap-8">
          <a href="https://github.com" className=" text-subtle">
            GITHUB
          </a>
          <a href="https://linkedin.com" className=" text-subtle">
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
}
