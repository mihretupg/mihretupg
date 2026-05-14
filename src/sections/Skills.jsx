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
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = skillIcons[group.icon];
          return (
            <article className="section-card hover-card" key={group.title}>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-50 text-accent-700">
                  <Icon size={22} />
                </span>
                <h3 className="text-xl font-bold text-navy-900">{group.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span className="skill-pill" key={skill}>
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
