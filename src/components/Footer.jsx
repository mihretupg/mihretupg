import { personal } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500">
      <p>© 2026 {personal.name}. Built for professional opportunities and freelance clients.</p>
    </footer>
  );
}

export default Footer;
