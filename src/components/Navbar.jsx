import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Memberikan efek blur/bayangan saat layar di-scroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-slate-900/80 border-b border-slate-800 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* --- Bagian Kiri: Logo --- */}
        <span className="font-bold text-2xl tracking-tighter text-slate-50">
          Portofolio<span className="text-blue-500">.</span>
        </span>
        
        {/* --- Bagian Kanan: Tombol Rekrut Saya --- */}
        <a 
          href="mailto:emailanda@gmail.com" // Nanti ganti dengan email atau link WhatsApp Anda
          className="bg-white text-slate-900 px-7 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-200 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
        >
          Kolaborasi
        </a>

      </div>
    </nav>
  );
};

export default Navbar;