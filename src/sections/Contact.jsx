import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import Section from "../components/Section";
import { contactLinks, githubUrl, personal } from "../data/portfolio";

const contactIcons = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
};

function Contact() {
  return (
    <Section id="contact" label="Contact" title="Available for remote support, web projects, and freelance work.">
      <div className="contact-card">
        <div>
          <h3 className="text-3xl font-bold text-resume-paper">Let's work together</h3>
          <p className="mt-4 max-w-xl leading-7 text-resume-line">
            Reach out for technical virtual assistance, frontend web development, Shopify support, or digital operations
            help.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={`mailto:${personal.email}`}>
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
            const Icon = contactIcons[item.icon];
            return (
              <a
                className="contact-link"
                href={item.href}
                key={item.label}
                target={item.label === "Location" ? "_blank" : undefined}
                rel={item.label === "Location" ? "noreferrer" : undefined}
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-resume-paper/10 text-accent-200">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-sm text-resume-muted">{item.label}</span>
                  <span className="font-semibold text-resume-paper">{item.value}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
