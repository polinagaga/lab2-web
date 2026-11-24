import { useEffect, useState } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xl font-bold cursor-pointer"
        >
          Закрити
        </button>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
          Зворотний зв'язок
        </h3>
        <form
          action="https://formspree.io/f/mjywpdla"
          method="POST"
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            required
            className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            required
            className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Повідомлення"
            required
            className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;