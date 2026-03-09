import React from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="text-black bg-slate-50"
    >
      
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-10 grid md:grid-cols-3 gap-8">
        
      
        <motion.div variants={item}>
          <h1 className="text-2xl font-bold tracking-wide">
            Sagar Korde
          </h1>
          <p className="mt-3 text-sm">
            MERN Stack Developer passionate about building modern web
            applications and user-friendly interfaces.
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-col md:items-center">
          <h2 className="font-semibold mb-3">Quick Links</h2>

          <a href="/home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="/about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </motion.div>

        <motion.div variants={item} className="md:text-right">
          <h2 className="font-semibold mb-2 md:text-xl md:mr-10">
            Connect
          </h2>

          <div className="flex md:justify-end gap-4">

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/sagarkorde9579"
              target="_blank"
              className="hover:text-yellow-500 transition"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/sagar-korde-54a19a326/"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <Linkedin size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:sk3397485@gmail.com"
              className="hover:text-red-500 transition"
            >
              <Mail size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.instagram.com/sagar_korde_18/"
              target="_blank"
              className="hover:text-pink-400 transition"
            >
              <Instagram size={24} />
            </motion.a>

          </div>
        </motion.div>

      </div>

  
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border-t border-gray-300 text-center py-4 text-sm"
      >
        © {new Date().getFullYear()} Sagar-Korde. All rights reserved.
      </motion.div>

    </motion.footer>
  );
};

export default Footer;