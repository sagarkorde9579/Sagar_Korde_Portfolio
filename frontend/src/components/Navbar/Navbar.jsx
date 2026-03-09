import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../../assets/assets";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Documents", path: "/documents" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
    
    <nav className="fixed top-0 left-0 w-full z-40 bg-white shadow-md font-sans">

      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 md:px-12 py-3">

   
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-semibold tracking-wide">
       <div className="h-6 w-6 rounded-full bg-blue-500 border-2 "></div>
          Sagar_Korde
        </NavLink>

        <ul className="hidden md:flex gap-7 text-sm font-medium">

          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600 transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

        </ul>

        <Menu
          size={28}
          onClick={() => setOpen(true)}
          className="cursor-pointer md:hidden"
        />

      </div>

    </nav>

  
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >

          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl flex flex-col"
          >

            <div className="flex justify-between items-center p-5 border-b">

              <h2 className="text-lg font-semibold border-b-2 border-black">
                Menu
              </h2>

              <X
                size={26}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />

            </div>

     
            <ul className="flex flex-col">

              {links.map((link, i) => (

                <li key={i} className="border-b">

                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-6 py-4 text-base ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>

                </li>

              ))}

            </ul>

            <div className="mt-auto p-6 border-t">

              <h2 className="text-black font-semibold mb-4 text-lg">
                Connect
              </h2>

              <div className="flex gap-5">

                <a
                  href="https://github.com/sagarkorde9579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800 transition"
                >
                  <Github size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/sagar-korde-54a19a326/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="mailto:sk3397485@gmail.com"
                  className="hover:text-red-500 transition"
                >
                  <Mail size={24} />
                </a>

                <a
                  href="https://www.instagram.com/sagar_korde_18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <Instagram size={24} />
                </a>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

    </>
  );
};

export default Navbar;