import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('kerja');

  const tabs = [
    { id: 'kerja', label: 'Pengalaman Kerja', icon: <FaBriefcase /> },
    { id: 'pendidikan', label: 'Pendidikan', icon: <FaGraduationCap /> },
    { id: 'organisasi', label: 'Organisasi', icon: <FaUsers /> },
    { id: 'sertifikasi', label: 'Sertifikasi', icon: <FaCertificate /> }
  ];

  const data = {
    kerja: [
      {
        title: "Yayasan Sakata Inovation Center",
        subtitle: "Co-Fasilitator Koding & Kecerdasan Artifisial",
        date: "2025",
        desc: "Membantu Fasilitator untuk memberikan pengalaman dan pengajaran tentang Kecerdasan Artifisial (AI), kepada guru tingkat SD, SMP dan SMA/SMK.",
        image: "/kerja1.jpg",
        link: "https://www.linkedin.com/in/muhammadalifakhdan/"
      }
    ],
    pendidikan: [

      {
        title: "SMA Jurusan IPA",
        subtitle: "SMAN 1 MAJALENGKA",
        date: "2018 - 2021",
        desc: "Lulusan jurusan Ilmu Pengetahuan Alam (IPA). Mengembangkan pengetahuan tentang pertitungan matematika dan logika matematika.",
        image: "/sma.png",
        link: "https://www.linkedin.com/in/muhammadalifakhdan/"
      },
      {
        title: "Sarjana Informatika (S.Kom)",
        subtitle: "UNIVERSITAS SILIWANGI",
        date: "2021 - 2028 (Perkiraan)",
        desc: "Mahasiswa aktif jurusan Informatika. Mempelajari Algoritma, Struktur Data, Pengembangan Perangkat Lunak, dan Kecerdasan Artifisial.",
        image: "/kuliah1.png",
        link: "https://www.linkedin.com/in/muhammadalifakhdan/"
      }
    ],
    organisasi: [
      {
        title: "Pengurus PPI Kabupaten Majalengka",
        subtitle: "Paskibraka 2021",
        date: "2022 - 2024",
        desc: "Melatih Latihan Dasar Kepemimpinan, belajar bertanggung jawab dalam setiap menjalankan tugas, dan belajar berorganisasi dalam suatu organisasi untuk di dunia kerja nanti",
        image: "/ppi.jpg",
        link: "#"
      }
    ],
    sertifikasi: [
      {
        title: "Fullstack Go ReactJS: Sistem Project Management",
        subtitle: "WPU Course",
        date: "Maret 2026",
        desc: "Mempelajari konsep dasar Machine Learning, Supervised & Unsupervised Learning, serta pengembangannya.",
        image: "/cert1.png",
        link: "https://learn.wpucourse.id/certificate/4DWN0JED",
        btnText: "Lihat Sertifikat"
      }
    ]
  };

  return (
    <section id="pengalaman" className="py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        
        {/* --- Bagian Header --- */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pengalaman & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Pendidikan</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Jejak karir, latar belakang pendidikan, dan kontribusi profesional.
          </p>
        </div>

        {/* --- Bagian Tabs --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 border border-transparent'
                  : 'bg-transparent text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- Bagian Konten Card --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            // PERBAIKAN 1: Mengubah grid menjadi flexbox rata tengah
            className="flex flex-wrap justify-center gap-6 w-full"
          >
            {data[activeTab].map((item, index) => (
              <div 
                key={index}
                // PERBAIKAN 2: Memberikan lebar pasti pada kartu agar membungkus dengan rapi di tengah
                className="group flex flex-col bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors duration-300 w-full md:w-[340px] lg:w-[350px]"
              >
                {/* Gambar & Badge Tanggal */}
                <div className="w-full aspect-video relative overflow-hidden bg-slate-800 border-b border-slate-700/50 shrink-0">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  
                  {item.date && (
                    <div className="absolute top-3 left-3 z-20 bg-slate-900/80 backdrop-blur-sm text-xs font-semibold text-slate-200 px-3 py-1.5 rounded-full border border-slate-700">
                      {item.date}
                    </div>
                  )}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Teks Konten */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-50 mb-1 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-slate-400 mb-4 tracking-wide">
                    {item.subtitle}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {item.desc}
                  </p>

                  {/* Tombol Link Eksternal */}
                  <a 
                    href={item.link} 
                    className="mt-auto w-full py-3 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors duration-300 text-sm font-medium border border-slate-600/50"
                  >
                    {item.btnText || "Lihat di LinkedIn"}
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Experience;