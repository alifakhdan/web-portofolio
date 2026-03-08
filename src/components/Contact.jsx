import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="kontak" className="py-24 relative">
      {/* Efek Cahaya Latar Belakang (Opsional untuk estetika) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-0">
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
        >
          
          {/* --- Bagian Kiri: Info Kontak & Sosial Media --- */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Berkolaborasi!</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Saat ini saya terbuka untuk peluang kerja sama, diskusi proyek perangkat lunak, atau sekadar berbagi wawasan seputar dunia IT. Jangan ragu untuk menyapa!
            </p>

            {/* Kotak Email Langsung */}
            <a 
              href="mailto:alifakhdan57@gmail.com" 
              className="group flex items-center gap-5 p-5 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 w-full max-w-md mb-10"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 text-blue-400 rounded-xl group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-400 mb-1">Email Saya</p>
                <p className="text-slate-100 font-semibold group-hover:text-blue-400 transition-colors">
                    alifakhdan57@gmail.com {/* <-- Ganti dengan email asli Anda */}
                </p>
              </div>
            </a>

            {/* Ikon Sosial Media */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/muhammadalifakhdan/" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-[#0a66c2] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300 text-xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/alifakhdan" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300 text-xl">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/alifakhdann/" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300 text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* --- Bagian Kanan: Form Kontak --- */}
          <div className="lg:col-span-7 bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Nama Anda</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">Alamat Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Pesan</label>
                <textarea 
                  id="message" 
                  rows="5"
                  placeholder="Halo, saya tertarik untuk mengajak Anda berkolaborasi..."
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transform hover:-translate-y-1"
              >
                Kirim Pesan
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

        </motion.div>

        {/* --- Footer Sederhana --- */}
        <div className="mt-32 pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Dibuat oleh alifakhdan dengan secangkir kopi dan didukung <span className="text-blue-500">React</span> & <span className="text-cyan-400">Tailwind</span>.
          </p>
          <div className="text-slate-500 text-sm font-medium">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-textGradient bg-[length:200%_auto]">
              Muhammad Alif Akhdan Tsani
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;