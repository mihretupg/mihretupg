import React from "react";
import { Menu, X } from "lucide-react";
import { navItems, personal } from "../data/portfolio";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-navy-950/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-white" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-500 font-bold">MP</span>
          <span className="text-sm font-semibold">{personal.name}</span>
        </a>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white transition hover:border-accent-500 hover:bg-white/10 lg:hidden"
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
        <div className="border-t border-white/10 bg-navy-950 px-5 pb-5 lg:hidden">
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
  return (
    <a
      className={
        mobile
          ? "rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
          : "rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
      }
      href={`#${item.toLowerCase()}`}
      onClick={onClick}
    >
      {item}
    </a>
  );
}

export default Header;
