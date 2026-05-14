import { Code2, MonitorCog, ShoppingBag, Wrench } from "lucide-react";
import Section from "../components/Section";
import { skillGroups } from "../data/portfolio";

const skillIcons = {
  code: Code2,
  monitor: MonitorCog,
  shop: ShoppingBag,
  tools: Wrench,
};

function Skills() {
  return (
    <Section id="skills" label="Skills" title="A practical toolkit for online business execution.">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = skillIcons[group.icon];
          return (
            <article className="section-card hover-card group" key={group.title}>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#5C766D]/10 text-[#5C766D] transition duration-200 group-hover:bg-[#5C766D] group-hover:text-[#EDE9E6]">
                  <Icon size={22} />
                </span>
                <h3 className="text-xl font-bold leading-tight text-navy-900">{group.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span className="skill-pill transition duration-200 hover:-translate-y-0.5 hover:border-[#5C766D] hover:bg-[#5C766D]/10" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
