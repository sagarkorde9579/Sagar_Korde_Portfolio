

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Skills from "./pages/Skills/Skills";
import Documents from "./pages/Documents/Documents";
import Home from "./pages/Home/Home";
import AdminLogin from "./pages/Admin/AdminLogin";

// function App() {
//   return (
//     <Router>
//       <Routes>

      
//         <Route path="/admin-login" element={<AdminLogin />} />

      
//         <Route path="/" element={<Sidebar />}>
//           <Route path="/home" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="projects" element={<Projects />} />
//           <Route path="skills" element={<Skills />} />
//           <Route path="resume" element={<Resume />} />
//           <Route path="documents" element={<Documents />} />

//         </Route>

//       </Routes>
//     </Router>
//   );
// }
function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Routes>

          <Route path="/admin-login" element={<AdminLogin />} />

          <Route path="/" element={<Sidebar />}>
            <Route path="/home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="resume" element={<Resume />} />
            <Route path="documents" element={<Documents />} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}
export default App;