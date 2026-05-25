import React from "react";
import { Menu, X } from "lucide-react";
import { navItems, personal } from "../data/portfolio";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);
  const goHome = (event) => navigateToSection(event, "home", closeMenu);

  React.useEffect(() => {
    const scrollToCurrentPath = () => {
      const sectionId = getSectionIdFromPath(window.location.pathname);

      if (sectionId) {
        window.requestAnimationFrame(() => scrollToSection(sectionId, "auto"));
      }
    };

    scrollToCurrentPath();
    window.addEventListener("popstate", scrollToCurrentPath);

    return () => window.removeEventListener("popstate", scrollToCurrentPath);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#5C4F4A]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/" className="text-sm font-semibold text-[#EDE9E6] sm:text-base" onClick={goHome} aria-label={personal.name}>
          Mihretu Petros, VA
        </a>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-[#EDE9E6]/20 text-[#EDE9E6] transition hover:border-[#C9996B] hover:bg-[#EDE9E6]/10 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink item={item} key={item} />
          ))}
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-[#EDE9E6]/10 bg-[#5C4F4A] px-5 pb-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 pt-2">
            {navItems.map((item) => (
              <NavLink item={item} key={item} onClick={closeMenu} mobile />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ item, mobile = false, onClick }) {
  const sectionId = item.toLowerCase();
  const href = `/${sectionId}`;
  const handleClick = (event) => navigateToSection(event, sectionId, onClick);

  return (
    <a
      className={
        mobile
          ? "rounded-lg px-3 py-3 text-sm font-medium text-[#EDE9E6] transition hover:bg-[#EDE9E6]/10 hover:text-[#EDE9E6]"
          : "rounded-lg px-3 py-2 text-sm font-medium text-[#EDE9E6] transition hover:bg-[#EDE9E6]/10 hover:text-[#EDE9E6]"
      }
      href={href}
      onClick={handleClick}
    >
      {item}
    </a>
  );
}

function getSectionIdFromPath(pathname) {
  const path = pathname.replace(/^\/+|\/+$/g, "");

  return path || "home";
}

function navigateToSection(event, sectionId, onNavigate) {
  event.preventDefault();
  onNavigate?.();

  const nextPath = sectionId === "home" ? "/" : `/${sectionId}`;
  window.history.pushState({}, "", nextPath);
  scrollToSection(sectionId, "smooth");
}

function scrollToSection(sectionId, behavior) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior, block: "start" });
  }
}

export default Header;
