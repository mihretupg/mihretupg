function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section-wrap">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="section-heading mb-12 max-w-3xl">
          <p className="section-eyebrow text-[#5C766D]">{label}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;
