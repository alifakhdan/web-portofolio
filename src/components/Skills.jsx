import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Mengelompokkan skill agar terlihat lebih terstruktur
  const skillCategories = [
    {
      title: "Bahasa Pemrograman",
      icon: <FaCode className="text-blue-500 text-2xl" />,
      skills: ["Java", "Go", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Teknologi & Tools",
      icon: <FaServer className="text-purple-500 text-2xl" />,
      skills: ["React", "Linux", "SQL", "Git", "Vite"]
    },
    {
      title: "Konsep IT",
      icon: <FaLaptopCode className="text-cyan-400 text-2xl" />,
      skills: ["Software Engineering", "UML Diagrams", "Linear Algebra", "Data Science", "Operating Systems"]
    }
  ];

  return (
    <section id="keahlian" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Layanan & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Keahlian</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Beberapa teknologi, bahasa pemrograman, dan konsep keilmuan komputer yang saya pelajari dan terapkan dalam pengembangan sistem.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              // Animasi berurutan berdasarkan index (delay)
              transition={{ delay: index * 0.2, duration: 0.5 }}
              variants={fadeInUp}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 rounded-2xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-slate-900/80 text-slate-300 text-sm font-medium rounded-full border border-slate-700 hover:text-white hover:border-blue-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;