import { Mail, Quote } from "lucide-react";
import Section from "../components/Section";
import { testimonials } from "../data/portfolio";

function Testimonials() {
  return (
    <Section
      id="testimonials"
      label="Testimonials"
      title="Remote support & web project references."
      titleClassName="font-light"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article className="section-card testimonial-card hover-card" key={`${testimonial.name}-${testimonial.company}`}>
            <Quote className="text-[#5C766D]" size={26} />
            <p className="mt-5 text-sm font-medium uppercase tracking-normal text-[#5C766D]">{testimonial.focus}</p>
            <h3 className="mt-4 text-2xl font-light leading-tight text-navy-900">{testimonial.name}</h3>
            <p className="mt-3 text-base leading-7 text-resume-body">
              {testimonial.role}, {testimonial.company}
            </p>
            {testimonial.email && (
              <a className="testimonial-email" href={`mailto:${testimonial.email}`} aria-label={`Email ${testimonial.name}`}>
                <Mail size={18} />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;
