function About() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-emerald-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
        Освіта
      </h2>
      <p className="text-slate-600 leading-relaxed pl-4 border-l border-slate-100">
        Національний університет "Львівська Політехніка", Спеціальність "Кібербезпека" (2025–2029)
      </p>
    </section>
  );
}

export default About;