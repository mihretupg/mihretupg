import { ArrowUpRight, BriefcaseBusiness, Code2, Download, Mail, MapPin, Target } from "lucide-react";
import Metric from "../components/Metric";
import { githubUrl, personal } from "../data/portfolio";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pt-28 text-white lg:pt-32">
      <div className="absolute inset-0 hero-grid opacity-35" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-5 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-blue-300/25 bg-white/8 px-3 py-2 text-sm text-blue-100">
            <MapPin size={16} />
            {personal.location}
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{personal.name}</h1>
          <p className="mt-5 text-xl font-semibold text-blue-100 lg:text-2xl">{personal.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{personal.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={`mailto:${personal.email}`}>
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
              <img className="profile-photo" src="/mihretu-petros-photo.jpg" alt={`Portrait of ${personal.name}`} />
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
  );
}

export default Hero;
