import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import Section from "../components/Section";
import { personal } from "../data/portfolio";

const whatsappNumber = personal.phone.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Hi Mihretu, I would like to discuss a virtual assistant role with you.");
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
    <Section
      id="contact"
      label="Contact"
      title="Available for virtual assistant roles and remote support."
      titleClassName="font-light"
    >
      <div className="contact-card contact-card-solo">
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
                  className="min-h-12 rounded-lg border border-white/20 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/60 focus:border-[#C9996B] focus:bg-white/20"
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
                  className="min-h-12 rounded-lg border border-white/20 bg-white/10 px-4 text-white outline-none transition placeholder:text-white/60 focus:border-[#C9996B] focus:bg-white/20"
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
                className="min-h-28 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/60 focus:border-[#C9996B] focus:bg-white/20"
                name="message"
                onChange={updateField}
                placeholder="Tell me what kind of VA support you need"
                required
                value={formData.message}
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="btn-primary" type="submit">
                <Send size={18} />
                Hire Me
              </button>
              <a className="btn-secondary" href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
            {submitted && <p className="text-sm font-semibold text-white">Opening your email app...</p>}
          </form>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
