import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import assets from "../../assets/assets";
const AdminLogin = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(
        "https://sagar-korde-portfolio.onrender.com/api/admin/login",
        formData
      );
       if (res.data.success) {
  
  localStorage.setItem("adminToken", res.data.token); 
  localStorage.setItem("isAdminLoggedIn", "true");

  navigate("/home");
}
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <>
    <div
  className="min-h-screen flex items-center md:items-start justify-center px-4 pt-10 md:pt-24 bg-gray-100"
 style={{
  backgroundImage: `url(${assets.bgimage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
>
      <div className="w-full max-w-md 
bg-gradient-to-br from-white/90 via-purple-100/80 to-indigo-200/80 
backdrop-blur-md 
shadow-2xl 
rounded-2xl 
p-6 sm:p-8 
border border-white/40">
        
        <h1 className="font-bold text-center text-violet-600 text-2xl sm:text-3xl mb-6">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col"
        >

          <div>
            <label className="font-medium text-sm sm:text-base">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">Mobile</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter Mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 mt-2 mb-6 border rounded-md outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2.5 rounded-md hover:bg-green-600 transition duration-300"
          >
            Login
          </button>

        </form>
      </div>

    </div>
  </>
);
};

export default AdminLogin;
