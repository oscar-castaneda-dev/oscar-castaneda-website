export function Footer() {
  return (
    <footer className="border-t border-carbon mt-auto">
      <div className="container font-nothing-label py-8 flex justify-between items-center">
        <span className="flex items-center text-ash">
          {new Date().getFullYear()} OSCAR CASTANEDA
        </span>
        <div className="flex gap-8">
          <a href="https://github.com" className=" text-smoke">
            GITHUB
          </a>
          <a href="https://linkedin.com" className=" text-smoke">
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
}
