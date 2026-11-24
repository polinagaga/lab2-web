function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-gradient-to-r from-emerald-800 to-teal-700 dark:from-slate-900 dark:to-emerald-950 text-white p-8 text-center shadow-xl border-b-4 border-emerald-400">
      <h1 className="text-4xl font-extrabold tracking-wide mb-2 hover:text-emerald-200 transition-colors cursor-default">
        Поліна Гага Вадимівна
      </h1>
      <p className="text-lg text-emerald-100 font-medium tracking-wide mb-4">
        Веброзробниця
      </p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-sm font-semibold transition-colors cursor-pointer"
      >
        {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
      </button>
    </header>
  );
}

export default Header;