import { UserRound } from "lucide-react";
import Section from "../components/Section";

function About() {
  return (
    <Section id="about" label="About" title="A reliable virtual assistant for organized remote support.">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="section-card bg-navy-900 text-resume-paper">
          <div className="about-photo-frame">
            <img className="about-photo" src="/mihretu-petros-photo.jpg" alt="Mihretu Petros" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <UserRound className="text-[#5C766D]" size={28} />
            <h3 className="text-2xl font-bold">Remote-ready, organized, and practical.</h3>
          </div>
          <p className="mt-4 leading-7 text-resume-line">
            Mihretu brings organized communication, careful task tracking, and steady remote support for online
            businesses.
          </p>
        </div>
        <div className="section-card">
          <p className="text-lg leading-8 text-resume-body">
            I am a tech-savvy Virtual Assistant with remote experience supporting e-commerce teams and online
            businesses. My background includes inbox management, customer communication, Shopify product updates, data
            entry, digital marketing support, scheduling, file organization, and day-to-day operational follow-through.
            I enjoy helping teams stay responsive, organized, and on top of recurring administrative work.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default About;
