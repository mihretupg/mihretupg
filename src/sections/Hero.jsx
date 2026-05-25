import { BriefcaseBusiness, ClipboardCheck, Mail, MapPin, MessageCircle, Target } from "lucide-react";
import Metric from "../components/Metric";
import { personal } from "../data/portfolio";

const whatsappNumber = personal.phone.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Hi Mihretu, I would like to discuss a virtual assistant role with you.");
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#5C4F4A] pt-28 text-[#EDE9E6] lg:pt-32">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-resume-paper to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-5 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#5C766D]/40 bg-resume-paper/10 px-3 py-2 text-sm text-[#EDE9E6]">
            <MapPin size={16} />
            {personal.location}
          </div>
          <h1 className="text-4xl font-bold leading-tight text-[#EDE9E6] sm:text-5xl lg:text-6xl">{personal.name}</h1>
          <p className="mt-5 text-xl font-semibold text-[#EDE9E6] lg:text-2xl">{personal.title}</p>
          <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-[#EDE9E6]">{personal.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={`mailto:${personal.email}`}>
              <Mail size={18} />
              Hire Me
            </a>
            <a className="btn-secondary" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <div className="profile-panel">
            <div className="profile-visual">
              <div className="profile-card-header">
                <img className="hero-profile-photo" src="/about-profile.jpg" alt={personal.name} />
                <div>
                  <p className="profile-status">Available for remote work</p>
                  <p className="profile-card-name">{personal.name}</p>
                </div>
              </div>
              <div className="profile-focus">
                <p>Virtual Assistant</p>
                <span>Admin systems, e-commerce support, and executive coordination</span>
              </div>
              <div className="profile-checklist" aria-label="Core service areas">
                <span>Calendar </span>
                <span>Email </span>
                <span>Ecommerce</span>
                <span>Web Dev</span>
              </div>
            </div>
            <div className="grid gap-4">
              <Metric icon={BriefcaseBusiness} label="Virtual Assistant" value="Admin support" />
              <Metric icon={ClipboardCheck} label="Executive Assistant" value="Inbox + scheduling" />
              <Metric icon={Target} label="Web Development" value="React + Tailwind" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
