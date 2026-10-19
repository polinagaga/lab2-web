function Experience() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-teal-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block"></span>
        Досвід роботи
      </h2>
      <ul className="space-y-3 text-slate-600 pl-4 border-l border-slate-100">
        <li className="p-3 bg-emerald-50/50 hover:bg-emerald-100/50 rounded-xl transition-colors">
          <strong className="text-emerald-950 font-semibold block mb-1">Навчальні проєкти:</strong>
          <span>Розробка веб-застосунків під час навчання.</span>
        </li>
      </ul>
    </section>
  );
}

export default Experience;