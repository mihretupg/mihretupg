import Section from "../components/Section";

function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Reliable virtual support for everyday operations."
      titleClassName="font-light"
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="section-card">
          <div className="flex items-center gap-3">
            <img className="about-profile-photo" src="/about-profile.jpg" alt="Mihretu Petros" />
            <h3 className="text-2xl font-light text-[#5C766D]">Remote-ready, organized, and practical.</h3>
          </div>
          <p className="mt-4 leading-7 text-resume-body">
            Mihretu brings organized communication, careful task tracking, and steady remote support for online
            businesses.
          </p>
        </div>
        <div className="section-card">
          <p className="text-lg leading-8 text-resume-body">
            I am a tech-savvy Virtual Assistant with remote experience supporting e-commerce teams and online
            businesses. My background includes Email management, customer communication, Shopify product updates, data
            entry, digital marketing support, scheduling, file organization, and day-to-day operational follow-through.
            I enjoy helping teams stay responsive, organized, and on top of recurring administrative work.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default About;
