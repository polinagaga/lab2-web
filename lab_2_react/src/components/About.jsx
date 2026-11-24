function About() {
  return (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border-l-4 border-emerald-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
        Освіта
      </h2>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-4 border-l border-slate-100 dark:border-slate-700">
        Національний університет "Львівська Політехніка", Спеціальність "Кібербезпека" (2025–2029)
      </p>
    </section>
  );
}

export default About;