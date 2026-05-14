import { UserRound } from "lucide-react";
import Section from "../components/Section";

function About() {
  return (
    <Section id="about" label="About" title="A technical assistant who can also build the website.">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="section-card bg-navy-900 text-resume-paper">
          <div className="about-photo-frame">
            <img className="about-photo" src="/mihretu-petros-photo.jpg" alt="Mihretu Petros" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <UserRound className="text-accent-300" size={28} />
            <h3 className="text-2xl font-bold">Remote-ready, organized, and practical.</h3>
          </div>
          <p className="mt-4 leading-7 text-resume-line">
            Mihretu brings web development skills together with the operational discipline needed for modern online
            businesses.
          </p>
        </div>
        <div className="section-card">
          <p className="text-lg leading-8 text-resume-body">
            I am a tech-savvy professional with experience working remotely for e-commerce and web development
            companies. My background combines frontend development, virtual assistance, Shopify store management,
            digital marketing support, and customer communication. I enjoy helping businesses improve their online
            presence, manage digital operations, and create user-friendly websites.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default About;
