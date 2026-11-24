import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-emerald-50/30 dark:bg-slate-950 flex flex-col justify-between font-sans transition-colors">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <About />
        <Experience />
        <Reviews />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;