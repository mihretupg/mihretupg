function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section-wrap">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase text-accent-600">{label}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;
