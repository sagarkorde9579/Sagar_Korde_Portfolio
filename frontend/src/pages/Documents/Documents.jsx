import React, { useContext } from "react";
import { motion } from "framer-motion";
import { storeContext } from "../../components/StoreContext/StoreContext";

const Documents = () => {
  const { documents } = useContext(storeContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6 md:px-20 bg-gray-200"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/011/020/176/small/abstract-white-and-light-gray-wave-modern-soft-luxury-texture-with-smooth-and-clean-background-free-vector.jpg')",
      }}
    >


      <div className="text-center mb-12">
        <h1 className="md:mt-5 mt-10 text-2xl md:text-5xl font-bold text-black">
          Achievements &{" "}
          <span className="text-cyan-500">Certifications</span>
        </h1>
      </div>

      <div className="mb-10 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-black border-b-2 border-cyan-400 inline-block pb-2">
          My Documents
        </h2>

        <p className="mt-2 text-gray-900 border-yellow-300">
          Internships, Degrees, Awards & More
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {documents &&
          documents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl  border border-slate-700/50 p-6 backdrop-blur-sm transition-all duration-500 ease-out  hover:border-yellow-500/50 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]"
            >

              <h3 className="text-lg font-bold text-black border-b-2 border-black inline-block">
                {item.header}
              </h3>

              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                {item.details}
              </p>

              <p className="text-sm text-cyan-500 mt-2 font-medium">
                {item.year}
              </p>

              <a
                href={`https://sagar-korde-portfolio.onrender.com/uploads/${item.image}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-500 hover:text-blue-700 underline text-sm"
              >
                View Document
              </a>

            </motion.div>
          ))}

      </div>

    </motion.section>
  );
};

export default Documents;
