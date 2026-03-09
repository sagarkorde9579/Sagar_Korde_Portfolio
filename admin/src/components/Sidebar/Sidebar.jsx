import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Home, User, Folder, FileText, Mail, Brain, LogOut } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", icon: Home, path: "/home" },
    { name: "About", icon: User, path: "/about" },
    { name: "Projects", icon: Folder, path: "/projects" },
    { name: "Resume", icon: FileText, path: "/resume" },
    { name: "Contact", icon: Mail, path: "/contact" },
    { name: "Skills", icon: Brain, path: "/skills" },
    { name: "Documents", icon: FileText, path: "/documents" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin-login");
  };

  return (
    <>
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

      <div className="flex relative min-h-screen">

       
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

       
  <aside
  className={`fixed md:static top-0 left-0 h-screen w-60 border-r-2 border-gray-400 shadow-sm
  flex flex-col justify-between
  transform transition-transform duration-300 z-50
  ${isOpen ? "translate-x-0 bg-white" : "-translate-x-full"}
  md:translate-x-0 md:bg-transparent`}
>
          
          <ul className="flex  flex-col gap-2 p-6 mt-6">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex  items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-blue-100  text-blue-600 font-semibold"
                        : "hover:bg-gray-100 hover:text-blue-600"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </ul>

        
          <div className="p-6 border-t flex items-center gap-3">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://img.freepik.com/premium-photo/smiling-teenager-boy-pointing-blank-screen-laptop-recommend-educational-website-application_116547-112166.jpg"
              alt="profile"
            />

            <h1 className="font-medium text-sm flex-1">
              Sagar_korde
            </h1>

            <button onClick={handleLogout}>
              <LogOut className="text-red-600 hover:scale-110 transition-transform" />
            </button>
          </div>
        </aside>

     <div className="flex-1  p-6 md:p-10">
  <Outlet />
</div>
      </div>
    </>
  );
};

export default Sidebar;