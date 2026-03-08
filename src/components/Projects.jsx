import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const portfolioProjects = [
    {
      title: "Pembelajaran Trigonometri",
      desc: "Project ini sebagai memenuhi nilai tugas project akhir Kalkulus I pada semester 1 Kuliah Informatika Universitas siliwangi. Website ini berisi pembelajaran Trigonometri",
      image: "/tigonometri.png", 
      tags: ["Next.js", "TypeSript", "Tailwind CSS", "Node.js"],
      github: "https://github.com/zhekabaila/project-kalkulus.git",
      demo: "https://trigonometri.vercel.app/"
    },
    {
      title: "Pariwisata Majalengka",
      desc: "Project ini sebagai memenuhi nilai tugas pada matakuliah Pemograman Web pada semester 4 Kuliah Informatika Universitas Siliwangi. Website ini berisi tentang keindahan alam yang ada di Majalengka",
      image: "/wisata.png", 
      tags: ["React", "Tailwind CSS", "Frontend"],
      github: "https://github.com/alifakhdan/tugas-web-wisata-majalengka.git",
      demo: "#"
    },
    {
      title: "Sistem Self Order Jus Alif",
      desc: "Program aljabar untuk mengimplementasikan operasi matriks, sistem persamaan linear, dan vektor untuk penyelesaian studi kasus di dunia nyata.",
      image: "/comingsoon.jpg", 
      tags: ["Project Meneger", "Frontend Developer", "Java"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="proyek" className="py-24">
      {/* PERBAIKAN DI SINI: Mengubah menjadi text-center seutuhnya dan menambahkan flex-col items-center */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-16 max-w-6xl mx-auto px-6 md:px-0 flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Unggulan</span>
        </h2>
        {/* max-w-2xl ditambahkan agar jika teks deskripsi panjang, dia tetap terbungkus rapi di tengah */}
        <p className="text-slate-400 text-lg max-w-2xl">
          Beberapa hasil karya dan tugas studi kasus yang pernah saya kerjakan.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 md:px-0">
        
        {portfolioProjects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ delay: index * 0.2 }}
            className="group flex flex-col bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300 h-full"
          >
            {/* Wadah Gambar */}
            <div className="w-full aspect-video overflow-hidden relative shrink-0 bg-slate-800 border-b border-slate-700/50">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Bagian Teks */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-50 mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-slate-400 mt-auto">
                <a href={project.github} className="hover:text-white hover:-translate-y-1 transition-all duration-300 text-lg" title="Lihat di GitHub">
                  <FaGithub />
                </a>
                <a href={project.demo} className="hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 text-lg" title="Lihat Website">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;