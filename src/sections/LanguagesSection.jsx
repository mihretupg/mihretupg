import { Languages } from "lucide-react";
import Section from "../components/Section";
import { languages } from "../data/portfolio";

function LanguagesSection() {
  return (
    <Section id="languages" label="Languages" title="Clear communication across local and global teams.">
      <div className="grid gap-6 md:grid-cols-2">
        {languages.map(([language, level]) => (
          <article className="section-card hover-card" key={language}>
            <Languages className="text-[#5C766D]" size={30} />
            <h3 className="mt-5 text-2xl font-bold text-navy-900">{language}</h3>
            <p className="mt-2 text-resume-body">{level}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default LanguagesSection;
