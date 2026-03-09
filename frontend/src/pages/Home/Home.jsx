import React, { useContext } from "react";
import { motion } from "framer-motion";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { storeContext } from "../../components/StoreContext/StoreContext";

const Home = () => {

  const { skills, documents, projects, homeData } = useContext(storeContext);
  const IMAGE_BASE_URL = "https://sagar-korde-portfolio.onrender.com/uploads/";

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } }
  };

  return (

<div
className="bg-slate-50 text-slate-900 font-poppins selection:bg-blue-100"
style={{
backgroundImage:
"url('https://static.vecteezy.com/system/resources/previews/007/701/884/non_2x/simple-gray-background-with-curved-elements-used-to-design-banners-landing-pages-posters-vector.jpg')"
}}
>

<motion.section
initial="initial"
animate="animate"
variants={staggerContainer}
className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-24 py-12 max-w-7xl mx-auto"
>

<motion.div variants={fadeInUp} className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

<img
className="relative mt-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl"
src={`http://localhost:2000/uploads/${homeData?.image}`}
alt="Sagar Korde"
/>

</motion.div>

<motion.div variants={fadeInUp} className="text-center md:text-left space-y-6">

<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
Sagar Korde

</h1>

<h2 className="text-2xl md:text-3xl font-medium text-slate-700">
<span className="text-violet-500 font-medium border-b-2 border-slate-600">
{homeData?.title}
</span>
</h2>

<p className="text-lg text-black max-w-xl">
{homeData?.about}
</p>

<div className="flex flex-wrap gap-4 justify-center md:justify-start">

<a
href="#Projects"
className="px-8 py-3 bg-white text-slate-700 border border-slate-200 font-medium rounded-lg hover:bg-slate-50 transition"
>
View My Work
</a>

<a
href="#Contact"
className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
>
Available for Hire
</a>

</div>

</motion.div>

</motion.section>

<main>

<motion.section 
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.8 }}
className="py-20 px-6 sm:px-12 lg:px-32 bg-violet-500 min-h-screen text-white"
style={{
backgroundImage:
"url('https://cdn.creativefabrica.com/2023/10/16/Abstract-light-gray-waves-background-Graphics-81708644-1-1-580x386.jpg')"
}}
>

<div className="max-w-7xl mx-auto">

<div className="flex flex-row md:flex-row md:items-end justify-center mb-16 gap-6 text-center md:text-left">

<div className="text-center">

<h1 className="text-5xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
Skill
</h1>

</div>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

{skills && skills.slice(0, 4).map((s, index) => (

<motion.div
key={index}
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ delay: index * 0.1 }}
viewport={{ once: true }}
className="group relative overflow-hidden rounded-3xl border border-slate-700/50 p-6 backdrop-blur-sm transition-all duration-500 ease-out hover:border-yellow-500/50 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]"
>

<div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all duration-500"></div>

<span className="absolute top-5 right-6 text-xs font-mono text-black uppercase tracking-widest group-hover:text-yellow-500 transition-colors">
0{index + 1}
</span>

<div className="relative z-10 flex flex-col items-center text-center">

<div className="w-28 h-28 rounded-full bg-black p-3 flex items-center justify-center border border-slate-700 mb-6 group-hover:scale-110 transition-transform duration-500">

<img
className="w-full h-full object-cover rounded-full"
src={`${IMAGE_BASE_URL}${s.image}`}
alt={s.skill}
/>

</div>

<h3 className="text-xl text-black sm:text-2xl font-bold mb-3 tracking-tight">
{s.skill}
</h3>

<p className="text-gray-800 font-medium text-sm leading-relaxed">
{s.description}
</p>

<div className="mt-6 w-8 h-1 bg-slate-700 group-hover:w-full group-hover:bg-yellow-500 transition-all duration-700"></div>

</div>

</motion.div>

))}

</div>

<div className="flex justify-center mt-8">

<a href="/skills" className="px-8 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition shadow-lg">
See More Skills
</a>

</div>

</div>

</motion.section>

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

{projects && projects.slice(0,3).map((d, index) => (

<motion.div
key={index}
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ delay: index * 0.1 }}
viewport={{ once: true }}
className="group relative overflow-hidden rounded-3xl border border-slate-700/50 p-6 backdrop-blur-sm transition-all duration-500 ease-out hover:border-yellow-500/50 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]"
>

<div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all duration-500"></div>

<div className="relative z-10 flex flex-col items-center text-center">

<div className="w-full h-48 object-cover rounded-md bg-black p-2 flex items-center justify-center border border-slate-700 mb-4 group-hover:scale-110 transition-transform duration-500">

<img
className="w-full h-full object-cover rounded-md"
src={`${IMAGE_BASE_URL}${d.image}`}
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

<div className="flex justify-center mt-8">

<a href="/projects" className="px-8 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition shadow-lg">
See More Skills
</a>

</div>

</div>

</motion.section>

<section
className="py-12 px-6 md:px-20 bg-gray-200"
style={{
backgroundImage:
"url('https://static.vecteezy.com/system/resources/thumbnails/011/020/176/small/abstract-white-and-light-gray-wave-modern-soft-luxury-texture-with-smooth-and-clean-background-free-vector.jpg')"
}}
>

<h1 className="text-center text-4xl md:text-5xl font-bold text-black mb-12">
Achievements & <span className="text-cyan-500">Certifications</span>
</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

{documents &&
documents.map((item, index) => (

<div key={index} className="bg-white shadow-md rounded-xl p-6">

<h3 className="text-lg font-bold border-b-2 border-black inline-block">
{item.header}
</h3>

<p className="text-gray-700 mt-2 text-sm">
{item.details}
</p>

<p className="text-sm text-cyan-500 mt-2 font-medium">
{item.year}
</p>

<a
href={`${IMAGE_BASE_URL}${item.image}`}
target="_blank"
rel="noopener noreferrer"
className="inline-block mt-3 text-blue-500 underline text-sm"
>
View Document
</a>

</div>

))}

</div>

</section>

<section id="Resume">
<Resume />
</section>

<section id="Contact">
<Contact />
</section>

</main>

<Footer />

</div>

);

};

export default Home;
