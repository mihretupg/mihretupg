import { CalendarDays, MapPin } from "lucide-react";
import Section from "../components/Section";
import { experiences } from "../data/portfolio";

function Experience() {
  return (
    <Section id="experience" label="Experience" title="Hands-on support for e-commerce, websites, and remote teams.">
      <div className="grid gap-6">
        {experiences.map((job) => (
          <ExperienceCard job={job} key={`${job.company}-${job.role}`} />
        ))}
      </div>
    </Section>
  );
}

function ExperienceCard({ job }) {
  return (
    <article className="section-card hover-card">
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-accent-600">{job.company}</p>
          <h3 className="mt-2 text-2xl font-bold text-navy-900">{job.role}</h3>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">
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
          <li className="flex gap-3 text-sm leading-6 text-slate-700" key={point}>
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Experience;
