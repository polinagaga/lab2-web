import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-emerald-50/30 flex flex-col justify-between font-sans">
      <Header />
      <main className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;