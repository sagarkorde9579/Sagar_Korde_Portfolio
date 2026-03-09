import React from "react";
import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-400 h-16 px-6">
      
      <div className="flex items-center gap-4">
   
        <Menu
          size={28}
          className="md:hidden cursor-pointer"
          onClick={toggleSidebar}
        />
<div className="h-6 w-6 rounded-full bg-blue-500 border-2 "></div>
        <h1 className="text-2xl md:text-2xl font-extrabold">
          Sagar_Korde
        </h1>
      </div>

      <img
        className="object-cover w-10 h-10 rounded-full"
        src="https://img.freepik.com/premium-photo/smiling-teenager-boy-pointing-blank-screen-laptop-recommend-educational-website-application_116547-112166.jpg?semt=ais_user_personalization&w=740&q=80"
        alt="profile"
      />
    </div>
  );
};

export default Navbar;