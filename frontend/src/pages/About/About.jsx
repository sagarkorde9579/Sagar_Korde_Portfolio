import React, { useContext } from "react";
import { motion } from "framer-motion"; 
import { Lightbulb, Target, CheckCircle2, Rocket, Code2, Globe } from "lucide-react"; 
import { storeContext } from "../../components/StoreContext/StoreContext";

const About = () => {
  const { aboutData } = useContext(storeContext);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  if (!aboutData) return null;

  return (
    <section className="bg-[#fafbfc] py-16 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/gray-white-gradient-abstract-background_53876-62619.jpg?semt=ais_rp_50_assets&w=740&q=80')",
      }}>
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <motion.div 
            variants={fadeInUp}
            className="relative mb-8 md:mb-10 group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-40 h-40 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-tr from-black to-violet-500 shadow-2xl"
            >
              <div className="w-full h-full rounded-full border-[6px] border-white overflow-hidden bg-white">
                <img
                  src={`http://localhost:2000/uploads/${aboutData[aboutData.length - 1]?.image}`}
                  alt="Sagar Korde"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Rocket size={14} className="animate-bounce" /> Full Stack Engineer
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sagar Korde</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Transforming complex logic into seamless digital experiences with the **MERN stack**.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 xl:col-span-8 space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-blue-600" />
              <h3 className="text-sm font-bold text-slate-600 uppercase tracking-widest">Technical Focus</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Lightbulb size={20} />
                  </div>
                  <h2 className="text-lg font-bold text-slate-800 mb-3">{item.interest}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="lg:sticky md:mt-10  lg:top-28 space-y-6">
              <div className="bg-slate-900 md:mb-32 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1] 
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl"
                ></motion.div>
                
                <h2 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
                   <Target className="text-blue-400" size={20} /> Soft Skills
                </h2>

                <ul className="space-y-4">
                  {["Fast Learner", "Problem Solver", "Detail Oriented", "Team Player"].map((trait, i) => (
                    <motion.li 
                      key={trait}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-slate-300 group"
                    >
                      <CheckCircle2 size={18} className="text-blue-500" />
                      <span className="group-hover:text-white transition-colors">{trait}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl flex items-center gap-7"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Globe size={28} className="animate-[spin_10s_linear_infinity]" />
                </div>
                <div className="">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Location</p>
                  <p className="font-bold text-slate-900 text-lg">Maharashtra, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;