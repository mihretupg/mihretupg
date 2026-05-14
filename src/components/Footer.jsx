import { personal } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-resume-line bg-resume-surface px-5 py-8 text-center text-sm text-resume-body">
      <p>© 2026 {personal.name}. Built for professional opportunities and freelance clients.</p>
    </footer>
  );
}

export default Footer;
