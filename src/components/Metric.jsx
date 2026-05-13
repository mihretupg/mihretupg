function Metric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-white/12 bg-white/8 p-4">
      <Icon className="text-blue-300" size={24} />
      <p className="mt-3 text-sm text-slate-400">{label}</p>
      <p className="mt-1 font-semibold text-white">{value}</p>
    </div>
  );
}

export default Metric;
