import React, { useContext } from "react";
import { storeContext } from "../../components/StoreContext/StoreContext";
import { motion } from "framer-motion";

const Projects = () => {
  const { projects } = useContext(storeContext);
  const IMAGE_BASE_URL = "https://sagar-korde-portfolio.onrender.com/";

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 sm:px-12 lg:px-20 min-h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.creativefabrica.com/2023/10/16/Abstract-light-gray-waves-background-Graphics-81708644-1-1-580x386.jpg')",
      }}
    >
      <div className="max-w-[1600px] mx-auto">


        <div className="flex justify-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Projects
          </h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects &&
            projects.map((d, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl  border border-slate-700/50 p-6 backdrop-blur-sm transition-all duration-500 ease-out  hover:border-yellow-500/50 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]"
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center">


                  <div className="w-full h-48 object-cover rounded-md bg-black p-2 flex items-center justify-center border border-slate-700 mb-4 group-hover:scale-110 transition-transform duration-500">
                   <img
  className="w-full h-full object-cover rounded-md"
  src={`${IMAGE_BASE_URL}uploads/${d.image}`}
  alt={d.title}
/>
                  </div>


                  <h3 className="text-xl text-black font-bold mb-2 tracking-tight">
                    {d.title}
                  </h3>


                  <p className="text-gray-800 font-medium text-sm leading-relaxed">
                    {d.information}
                  </p>

                  <div className="flex gap-12 mt-4">

                    <a
                      href={d.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-semibold hover:bg-yellow-500 hover:text-black transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-green-500 text-black text-sm font-semibold hover:bg-yellow-500 transition"
                    >
                      Go Live
                    </a>

                  </div>

                  <div className="mt-6 w-8 h-1 bg-slate-700 group-hover:w-full group-hover:bg-yellow-500 transition-all duration-700"></div>

                </div>
              </motion.div>
            ))}

        </div>

      </div>
    </motion.section>
  );
};

export default Projects;
