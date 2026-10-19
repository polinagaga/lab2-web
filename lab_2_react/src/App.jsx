import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;