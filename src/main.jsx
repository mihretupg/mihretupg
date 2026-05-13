import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Download,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Phone,
  Send,
  ShoppingBag,
  Sparkles,
  Target,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import "./styles.css";

const navItems = [
  "About",
  "Experience",
  "Skills",
  "Education",
  "Training",
  "Languages",
  "Contact",
];

const experiences = [
  {
    role: "Technical Virtual Assistant",
    company: "Expressbrands",
    location: "Remote / New York-based company",
    dates: "Aug 2024 - May 2026",
    points: [
      "Managed daily e-commerce operations and online store administration",
      "Updated Shopify product listings, inventory, pricing, and website content",
      "Supported frontend website updates using HTML, CSS, JavaScript, and React",
      "Assisted with SEO optimization and landing page creation",
      "Managed professional email communication and customer support inquiries",
      "Coordinated email campaigns and social media support activities",
      "Maintained organized remote workflows, scheduling, and administrative tasks",
    ],
  },
  {
    role: "Remote Full-Time Web Developer",
    company: "Kelemarts",
    location: "Remote",
    dates: "May 2023 - Apr 2024",
    points: [
      "Designed, developed, and maintained responsive company websites",
      "Updated website layouts, frontend components, and content",
      "Collaborated remotely with team members on branding and marketing goals",
      "Improved website performance using HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap",
      "Ensured consistent branding and user-friendly website experiences",
      "Provided frontend troubleshooting and technical support",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Git", "GitHub"],
  },
  {
    title: "E-commerce & CMS",
    icon: ShoppingBag,
    items: [
      "Shopify",
      "WordPress",
      "Product Listing",
      "Inventory Management",
      "Website Management",
      "SEO Optimization",
      "Landing Page Creation",
    ],
  },
  {
    title: "Digital Marketing & Virtual Assistance",
    icon: MonitorCog,
    items: [
      "Email Campaign Management",
      "Social Media Support",
      "Customer Support",
      "Data Entry",
      "Calendar Management",
      "Administrative Support",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      "Canva",
      "Google Workspace",
      "Microsoft Office",
      "Excel",
      "Slack",
      "Trello",
      "Asana",
      "Mailchimp",
      "Meta Ads Manager",
      "Figma",
    ],
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "mihretupg@gmail.com",
    href: "mailto:mihretupg@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+251 910 497 908",
    href: "tel:+251910497908",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: "https://www.google.com/maps/place/Addis+Ababa,+Ethiopia",
    icon: MapPin,
  },
];

const githubUrl = "https://github.com/mihretupg";

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-navy-950/92 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-white" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-500 font-bold">MP</span>
            <span className="text-sm font-semibold">Mihretu Petros</span>
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white transition hover:border-accent-500 hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/10 bg-navy-950 px-5 pb-5 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1 pt-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-navy-950 pt-28 text-white lg:pt-32">
          <div className="absolute inset-0 hero-grid opacity-35" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
          <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-5 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-blue-300/25 bg-white/8 px-3 py-2 text-sm text-blue-100">
                <MapPin size={16} />
                Addis Ababa, Ethiopia
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Mihretu Petros
              </h1>
              <p className="mt-5 text-xl font-semibold text-blue-100 lg:text-2xl">
                Technical Virtual Assistant | Frontend Web Developer | E-commerce Support Specialist
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                Detail-oriented Technical Virtual Assistant and Frontend Web Developer with experience supporting
                remote e-commerce operations, Shopify administration, digital marketing activities, customer
                communication, and frontend website development. Skilled in HTML, CSS, JavaScript, React, Tailwind CSS,
                Shopify, WordPress, SEO, and modern business collaboration tools.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="mailto:mihretupg@gmail.com">
                  <Mail size={18} />
                  Email
                </a>
                <a className="btn-secondary" href={githubUrl} target="_blank" rel="noreferrer">
                  <ArrowUpRight size={18} />
                  GitHub Portfolio
                </a>
                <a className="btn-light" href="/Mihretu-Petros-CV.txt" download>
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="profile-panel">
                <div className="profile-visual">
                  <img
                    className="profile-photo"
                    src="/mihretu-petros-photo.jpg"
                    alt="Portrait of Mihretu Petros"
                  />
                </div>
                <div className="grid gap-4">
                  <Metric icon={BriefcaseBusiness} label="Remote Operations" value="E-commerce VA" />
                  <Metric icon={Code2} label="Frontend Stack" value="React + Tailwind" />
                  <Metric icon={Target} label="Client Focus" value="Reliable delivery" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" label="About" title="A technical assistant who can also build the website.">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="section-card bg-navy-900 text-white">
              <UserRound className="mb-8 text-blue-300" size={34} />
              <h3 className="text-2xl font-bold">Remote-ready, organized, and practical.</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Mihretu brings web development skills together with the operational discipline needed for modern online
                businesses.
              </p>
            </div>
            <div className="section-card">
              <p className="text-lg leading-8 text-slate-700">
                I am a tech-savvy professional with experience working remotely for e-commerce and web development
                companies. My background combines frontend development, virtual assistance, Shopify store management,
                digital marketing support, and customer communication. I enjoy helping businesses improve their online
                presence, manage digital operations, and create user-friendly websites.
              </p>
            </div>
          </div>
        </Section>

        <Section id="experience" label="Experience" title="Hands-on support for e-commerce, websites, and remote teams.">
          <div className="grid gap-6">
            {experiences.map((job) => (
              <article className="section-card hover-card" key={`${job.company}-${job.role}`}>
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
            ))}
          </div>
        </Section>

        <Section id="skills" label="Skills" title="A practical toolkit for online business execution.">
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="section-card hover-card" key={group.title}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50 text-accent-600">
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

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2 lg:px-8">
            <MiniSection
              id="education"
              icon={GraduationCap}
              label="Education"
              title="Haramaya University"
              description="Bachelor's Degree in Electrical and Computer Engineering"
              meta="2021"
            />
            <MiniSection
              id="training"
              icon={Sparkles}
              label="Training"
              title="Virtual Assistant Program - ALX Africa"
              description="Completed professional training in remote administrative support, communication, scheduling, digital collaboration, workflow management, and productivity tools."
              meta="2024"
            />
          </div>
        </section>

        <Section id="languages" label="Languages" title="Clear communication across local and global teams.">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ["English", "Fluent"],
              ["Amharic", "Native"],
            ].map(([language, level]) => (
              <article className="section-card hover-card" key={language}>
                <Languages className="text-accent-600" size={30} />
                <h3 className="mt-5 text-2xl font-bold text-navy-900">{language}</h3>
                <p className="mt-2 text-slate-600">{level}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" label="Contact" title="Available for remote support, web projects, and freelance work.">
          <div className="contact-card">
            <div>
              <h3 className="text-3xl font-bold text-white">Let's work together</h3>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Reach out for technical virtual assistance, frontend web development, Shopify support, or digital
                operations help.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="mailto:mihretupg@gmail.com">
                  <Send size={18} />
                  Email Mihretu
                </a>
                <a className="btn-secondary" href={githubUrl} target="_blank" rel="noreferrer">
                  <ArrowUpRight size={18} />
                  GitHub Portfolio
                </a>
              </div>
            </div>
            <div className="grid gap-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a className="contact-link" href={item.href} key={item.label} target={item.label === "Location" ? "_blank" : undefined} rel={item.label === "Location" ? "noreferrer" : undefined}>
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-blue-200">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-sm text-slate-400">{item.label}</span>
                      <span className="font-semibold text-white">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Mihretu Petros. Built for professional opportunities and freelance clients.</p>
      </footer>
    </div>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section-wrap">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase text-accent-600">{label}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Metric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-white/12 bg-white/8 p-4">
      <Icon className="text-blue-300" size={24} />
      <p className="mt-3 text-sm text-slate-400">{label}</p>
      <p className="mt-1 font-semibold text-white">{value}</p>
    </div>
  );
}

function MiniSection({ id, icon: Icon, label, title, description, meta }) {
  return (
    <article id={id} className="section-card hover-card scroll-mt-24">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-blue-50 text-accent-600">
          <Icon size={24} />
        </span>
        <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-navy-900">{meta}</span>
      </div>
      <p className="mt-8 text-sm font-bold uppercase text-accent-600">{label}</p>
      <h3 className="mt-3 text-2xl font-bold text-navy-900">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </article>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
