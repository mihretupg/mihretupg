import { ExternalLink, LayoutDashboard, ShoppingBag, UserCheck } from "lucide-react";
import Section from "../components/Section";
import { personal } from "../data/portfolio";

const projects = [
  {
    title: "Virtual Assistant Portfolio",
    type: "Personal website",
    description:
      "A focused portfolio site built to present remote support experience, VA services, contact details, and downloadable credentials clearly.",
    link: "#home",
    linkLabel: "View site",
    icon: UserCheck,
    variant: "portfolio",
  },
  {
    title: "E-commerce Product Support",
    type: "Shopify workflow",
    description:
      "A product-management workflow concept showing how listings, inventory updates, customer tasks, and content checks can be organized.",
    link: `mailto:${personal.email}?subject=E-commerce%20support%20project%20walkthrough`,
    linkLabel: "Request walkthrough",
    icon: ShoppingBag,
    variant: "shop",
  },
  {
    title: "Remote Operations Dashboard",
    type: "Admin support system",
    description:
      "A dashboard-style project concept for tracking inbox tasks, follow-ups, schedules, files, and daily remote team priorities.",
    link: `mailto:${personal.email}?subject=Remote%20operations%20dashboard%20walkthrough`,
    linkLabel: "Request walkthrough",
    icon: LayoutDashboard,
    variant: "dashboard",
  },
];

function Projects() {
  return (
    <Section id="projects" label="Projects" title="Web projects that support VA and online business work.">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <article className="section-card hover-card flex h-full flex-col overflow-hidden p-0" key={project.title}>
              <ProjectPreview variant={project.variant} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#5C766D]/10 text-[#5C766D]">
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase text-[#5C766D]">{project.type}</p>
                    <h3 className="mt-1 text-xl font-bold text-navy-900">{project.title}</h3>
                  </div>
                </div>
                <p className="mt-5 flex-1 leading-7 text-resume-body">{project.description}</p>
                <a className="mt-6 inline-flex items-center gap-2 font-bold text-[#5C766D]" href={project.link}>
                  {project.linkLabel}
                  <ExternalLink size={17} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function ProjectPreview({ variant }) {
  return (
    <div className={`project-preview project-preview-${variant}`} aria-label={`${variant} project screenshot preview`}>
      <div className="project-browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="project-preview-body">
        <div className="project-preview-sidebar" />
        <div className="project-preview-content">
          <div className="project-preview-line project-preview-line-strong" />
          <div className="project-preview-line" />
          <div className="project-preview-grid">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
