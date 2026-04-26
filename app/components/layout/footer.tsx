export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-8 flex flex-col md:flex-row justify-start md:justify-between">
        <div className="flex items-center text-disabled mb-4 md:mb-0">
          {new Date().getFullYear()} - Oscar Castaneda
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
          <a href="https://github.com" className="text-caption">
            GITHUB
          </a>
          <a href="https://linkedin.com" className="text-caption">
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
}
