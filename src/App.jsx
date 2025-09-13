
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';


function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#0a192f] text-white bg-gradient-to-br from-[#1a002e] via-[#0a001c] to-[#000010]  ">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        
        <Projects />
        <Experience/>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

