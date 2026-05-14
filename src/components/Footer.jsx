import { personal } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-resume-line bg-resume-surface px-5 py-8 text-center text-sm text-resume-body">
      <p>&copy; 2026 {personal.name}.</p>
    </footer>
  );
}

export default Footer;
