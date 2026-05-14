import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Section from "../components/Section";
import { contactLinks, personal } from "../data/portfolio";

const contactIcons = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent("Virtual Assistant Role Opportunity");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    setSubmitted(true);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" label="Contact" title="Available for virtual assistant roles and remote support.">
      <div className="contact-card">
        <div>
          <h3 className="text-3xl font-bold text-white">Let's work together</h3>
          <p className="mt-4 max-w-xl leading-7 text-white">
            Reach out for virtual assistance, inbox support, Shopify administration, customer communication, data entry,
            or remote operations help.
          </p>
          <form className="mt-8 grid gap-4" onSubmit={sendMessage}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-white">
                Name
                <input
                  className="min-h-12 rounded-lg border border-white/20 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/60 focus:border-[#C9996B] focus:bg-white/14"
                  name="name"
                  onChange={updateField}
                  placeholder="Your name"
                  required
                  type="text"
                  value={formData.name}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-white">
                Email
                <input
                  className="min-h-12 rounded-lg border border-white/20 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/60 focus:border-[#C9996B] focus:bg-white/14"
                  name="email"
                  onChange={updateField}
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={formData.email}
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-white">
              Message
              <textarea
                className="min-h-28 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/60 focus:border-[#C9996B] focus:bg-white/14"
                name="message"
                onChange={updateField}
                placeholder="Tell me what kind of VA support you need"
                required
                value={formData.message}
              />
            </label>
            <button className="btn-primary justify-self-start" type="submit">
              <Send size={18} />
              Hire Me
            </button>
            {submitted && <p className="text-sm font-semibold text-white">Opening your email app...</p>}
          </form>
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
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-resume-paper/10 text-white">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-sm text-white">{item.label}</span>
                  <span className="font-semibold text-white">{item.value}</span>
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
