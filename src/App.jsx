import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';     // <-- Import komponen baru
import Projects from './components/Projects'; // <-- Import komponen baru
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0f172a] text-slate-50 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        {/* Tambahkan max-w-6xl mx-auto px-6 langsung di dalam komponen masing-masing */}
        <Hero />
        <Experience />
        <Projects />  {/* <-- Panggil di sini */}
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;