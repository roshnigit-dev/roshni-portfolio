import { useState } from "react";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function Navbar({
  darkMode,
  setDarkMode,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-[var(--text)]"
        >
          R<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--accent)]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">

          {/* Theme */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm transition hover:bg-[var(--surface-hover)]"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/roshnigit-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--text-muted)] transition hover:text-[var(--accent)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.76.84 1.22 1.91 1.22 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .7Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/roshani-pandey01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-muted)] transition hover:text-[var(--accent)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
            </svg>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[var(--text)]"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-2">

            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--accent)]"
              >
                {item}
              </a>
            ))}

            <div className="mt-3 flex items-center gap-5 border-t border-[var(--border)] pt-4">

              {/* Mobile GitHub */}
              <a
                href="https://github.com/roshnigit-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--text-muted)] transition hover:text-[var(--accent)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.76.84 1.22 1.91 1.22 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .7Z" />
                </svg>
              </a>

              {/* Mobile LinkedIn */}
              <a
                href="https://www.linkedin.com/in/roshani-pandey01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--text-muted)] transition hover:text-[var(--accent)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 22.22 24Z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}