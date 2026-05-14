function Metric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-resume-paper/15 bg-resume-paper/10 p-4">
      <Icon className="text-[#C9996B]" size={24} />
      <p className="mt-3 text-sm text-resume-muted">{label}</p>
      <p className="mt-1 font-semibold text-resume-paper">{value}</p>
    </div>
  );
}

export default Metric;
