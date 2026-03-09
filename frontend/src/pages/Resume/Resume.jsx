import React, { useContext } from "react";
import { motion } from "framer-motion";
import { storeContext } from "../../components/StoreContext/StoreContext";

const Resume = () => {

  const { resume } = useContext(storeContext);

  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "resume";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex pt-28 flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJa_5brxzYNDjdm966vMD66rzd0LffBQS3A&s')"
      }}
    >

      <h2 className="text-3xl md:text-4xl border-b-4 border-blue-400 font-bold mb-6">
        Resume
      </h2>

      {resume && resume.map((item, index) => {

        const fileUrl = `https://sagar-korde-portfolio.onrender.com/uploads/${item.image}`;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >

            <motion.img
              whileHover={{ scale: 1.03 }}
              src={fileUrl}
              className="h-[80vh] md:h-[90vh] w-auto object-contain shadow-xl rounded-xl"
              alt="Resume"
            />

            <motion.button
              onClick={() => handleDownload(fileUrl)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 mb-3 py-2 text-lg hover:border-yellow-300 hover:border-2 transition-all bg-green-400 text-black rounded-md"
            >
              Download Resume
            </motion.button>

          </motion.div>
        );

      })}

    </motion.div>
  );
};

export default Resume;
