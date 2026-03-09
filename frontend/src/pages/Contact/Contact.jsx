import React, { useContext } from "react";
import { PhoneCall, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { storeContext } from "../../components/StoreContext/StoreContext";

const Contact = () => {

  const { contacts } = useContext(storeContext);

  if (!contacts) {
    return (
      <div className="text-center text-xl mt-20 font-semibold">
        Loading Contact Data...
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24 px-5 md:px-10"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/business-contact-icons-magenta-phone-email-address-d-rendering_337384-579.jpg?semt=ais_hybrid&w=740&q=80')",
      }}
    >

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-3xl mx-auto text-center text-white">

        <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl tracking-wide">
          Get in <span className="text-cyan-400">Touch</span>
        </h1>

        <p className="py-5 text-gray-200 text-sm sm:text-md md:text-lg">
          Have any opportunity? I'd love to hear from you.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 sm:p-10 md:p-16 space-y-8 text-left"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >

          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex items-center gap-4 group flex-wrap"
          >
            <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition">
              <PhoneCall className="text-blue-400 group-hover:text-white" />
            </div>

            <p className="text-sm sm:text-lg break-all">
              <span className="font-semibold text-black tracking-wide">
                {contacts?.phone}
              </span>
            </p>
          </motion.div>

      
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex items-center gap-4 group"
          >
            <div className="p-3 rounded-full bg-blue-300 group-hover:bg-blue-600 transition">
              <Linkedin className="text-blue-600 group-hover:text-white" />
            </div>

            <p className="text-sm sm:text-lg break-all">
              <span className="font-semibold text-black tracking-wide">
                {contacts?.linkedin}
              </span>
            </p>
          </motion.div>

         
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex items-center gap-4 group flex-wrap"
          >
            <div className="p-3 rounded-full bg-green-500/20 group-hover:bg-green-500 transition">
              <Mail className="text-green-500 group-hover:text-white" />
            </div>

            <p className="text-sm sm:text-lg break-all">
              <span className="font-semibold text-black tracking-wide">
                {contacts?.github}
              </span>
            </p>
          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;