import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa'; 

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center pt-20"
      id="beranda"
    >
      {/* 1. PERBAIKAN DI SINI: Ditambahkan max-w-6xl dan mx-auto agar posisi grid terkunci di tengah layar */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center px-6 md:px-0">
        
        {/* --- Bagian Foto --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          // 2. PERBAIKAN DI SINI: Diganti dari lg:justify-start menjadi justify-center agar foto tidak menabrak batas kiri
          className="order-1 lg:col-span-5 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            
            <motion.div 
              animate={{ 
                rotate: [45, 405], 
                scale: [0.95, 1.05, 0.95] 
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-[110%] h-[110%] bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 rounded-[3rem] blur-2xl opacity-60"
            />

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl group cursor-pointer"
            >
              <img 
                src="/formal.jpg" 
                alt="Foto Profil" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </motion.div>

          </div>
        </motion.div>


        {/* --- Bagian Teks --- */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="order-2 lg:col-span-7" 
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tighter">
            <span className="text-white">Hai, saya</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-[length:200%_auto] animate-textGradient">
              Alif Akhdan Tsani
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl w-full mb-10 leading-relaxed">
            Mahasiswa Informatika yang sangat tertarik dengan Software Engineering. Saya menikmati proses merancang arsitektur sistem dan membangun solusi perangkat lunak menggunakan teknologi seperti Java, Go, dan React.
          </p>
          
          <div className="flex flex-wrap gap-4">
            
            <a 
              href="#proyek" 
              // 3. Mengganti flex menjadi inline-flex agar tombol tidak memanjang mengikuti layar
              className="group inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-200 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]"
            >
              Lihat Karya Saya
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;