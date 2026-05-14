import { CalendarDays, MapPin } from "lucide-react";
import Section from "../components/Section";
import { experiences } from "../data/portfolio";

const brandLogos = [
  {
    match: "express",
    src: "/brand-logos/express.png",
    alt: "Express logo",
  },
  {
    match: "abro",
    src: "/brand-logos/abrocollective.png",
    alt: "Abro Collective logo",
  },
  {
    match: "kelem",
    src: "/brand-logos/kelem-shop.png",
    alt: "Kelem Shop logo",
  },
];

function getBrandLogo(company) {
  const normalizedCompany = company.toLowerCase();

  return brandLogos.find((logo) => normalizedCompany.includes(logo.match));
}

function Experience() {
  return (
    <Section id="experience" label="Experience" title="Hands-on virtual assistance for e-commerce and remote teams.">
      <div className="grid gap-5 sm:gap-6">
        {experiences.map((job) => (
          <ExperienceCard job={job} key={`${job.company}-${job.role}`} />
        ))}
      </div>
    </Section>
  );
}

function ExperienceCard({ job }) {
  const logo = getBrandLogo(job.company);

  return (
    <article className="section-card hover-card group">
      <div className="flex flex-col gap-4 border-b border-resume-line pb-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          {logo && (
            <span className="brand-logo-frame">
              <img className="brand-logo-image transition duration-200 group-hover:scale-105" src={logo.src} alt={logo.alt} />
            </span>
          )}
          <div>
            <p className="text-sm font-semibold uppercase text-[#5C766D]">{job.company}</p>
            <h3 className="mt-2 text-2xl font-bold text-navy-900">{job.role}</h3>
          </div>
        </div>
        <div className="md:text-right">
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-resume-body">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={16} />
              {job.dates}
            </span>
          </div>
        </div>
      </div>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {job.points.map((point) => (
          <li className="flex gap-3 rounded-lg p-2 text-sm leading-6 text-resume-strong transition duration-200 hover:bg-[#5C766D]/10" key={point}>
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5C766D]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Experience;
