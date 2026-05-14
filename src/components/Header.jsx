import React from "react";
import { Menu, X } from "lucide-react";
import { navItems, personal } from "../data/portfolio";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#5C4F4A]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-[#EDE9E6]" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#C9996B] font-bold text-[#5C4F4A]">MP</span>
          <span className="text-sm font-semibold">{personal.name}</span>
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
  return (
    <a
      className={
        mobile
          ? "rounded-lg px-3 py-3 text-sm font-medium text-[#EDE9E6] transition hover:bg-[#EDE9E6]/10 hover:text-[#EDE9E6]"
          : "rounded-lg px-3 py-2 text-sm font-medium text-[#EDE9E6] transition hover:bg-[#EDE9E6]/10 hover:text-[#EDE9E6]"
      }
      href={`#${item.toLowerCase()}`}
      onClick={onClick}
    >
      {item}
    </a>
  );
}

export default Header;
