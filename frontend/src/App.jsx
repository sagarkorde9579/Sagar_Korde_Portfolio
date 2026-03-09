// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Projects from "./pages/Projects/Projects";
// import Skills from "./pages/Skills/Skills";
// import Contact from "./pages/Contact/Contact";
// import Home from "./pages/Home/Home";
// import Resume from "./pages/Resume/Resume";
// import About from "./pages/About/About";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//        <Route path="/resume" element={<Resume/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import AboutPage from "./pages/About/AboutPage";
import SkillsPage from "./pages/Skills/SkillsPage";
import ResumePage from "./pages/Resume/ResumePage";
import ContactPage from "./pages/Contact/ContactPage";
import DocumentPage from "./pages/Documents/DocumentPage";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/documents" element={<DocumentPage />} />
      </Routes>
    </>
  );
}

export default App;