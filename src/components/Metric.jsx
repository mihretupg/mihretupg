function Metric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-white/12 bg-white/8 p-4">
      <Icon className="text-accent-300" size={24} />
      <p className="mt-3 text-sm text-resume-muted">{label}</p>
      <p className="mt-1 font-semibold text-white">{value}</p>
    </div>
  );
}

export default Metric;
