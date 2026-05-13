function MiniSection({ id, icon: Icon, label, title, description, meta }) {
  return (
    <article id={id} className="section-card hover-card scroll-mt-24">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-blue-50 text-accent-600">
          <Icon size={24} />
        </span>
        <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-navy-900">{meta}</span>
      </div>
      <p className="mt-8 text-sm font-bold uppercase text-accent-600">{label}</p>
      <h3 className="mt-3 text-2xl font-bold text-navy-900">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export default MiniSection;
