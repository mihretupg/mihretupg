import { UserRound } from "lucide-react";
import Section from "../components/Section";

function About() {
  return (
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
  );
}

export default About;
