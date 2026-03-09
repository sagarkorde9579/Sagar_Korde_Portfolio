import React, { useState } from "react";
import AdminLogin from "../Admin/AdminLogin";
import assets from "../../assets/assets";
import {toast} from "react-toastify";
const icon=assets.upload;
const Home = () => {
 const [form,setForm]=useState({
  image:null,
  title:"",
  about:"",
  preview:""
 })

 const handleImage=(e)=>{
  const file=e.target.files[0];
  if(file){
    setForm({
      ...form,
      image:file,
      preview:URL.createObjectURL(file)
    })
  }
 }
 const handleChange=(e)=>{
  setForm({
    ...form,
    [e.target.name]:e.target.value
  });
 }
 const handleSubmit=async(e)=>{
  e.preventDefault();
  const formData=new FormData();
  formData.append("title",form.title);
  formData.append("about",form.about);

  if (form.image) {
  formData.append("image", form.image);
}
  try{
   const res = await fetch("http://localhost:2000/api/home/update", {
  method: "POST",
  body: formData
});

const data = await res.json();


if (res.ok) {
  toast.success("Add successfully");

  setForm({
    image: null,
    about: "",
    preview: ""
  });
} else {
  alert(data.message || "Server error");
}
  } catch(error){
 
    alert("catch error");
  }
 }


  return (
    <div className="flex flex-col justify-center items-center md:items-start 
    w-full max-w-md md:mx-0 mx-auto p-5 sm:p-8">

      <form onSubmit={handleSubmit}>
        <h1 className="font-medium mb-4">Upload New Image</h1>

        <div className="bg-gray-100 w-20 h-20 border border-black border-dotted mb-3">
          <label htmlFor="image" className="cursor-pointer">
            <img 
  src={form.preview || icon} 
  alt="owner" 
  className="w-full h-full object-cover rounded-md"
/>
          </label>
          <input type="file" name="image" id="image" hidden onChange={handleImage} />
        </div>

        <div>
          <label className="font-medium">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
           
            placeholder="Enter job title"
            className="w-full p-2 mt-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400 resize-none"
          />
        </div>
        <div>
          <label className="font-medium">About Me</label>
          <textarea
            name="about"
            value={form.about}
            onChange={handleChange}
            rows={4}
            placeholder="Enter personal information"
            className="w-full h-28 sm:h-36 p-2 mt-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400 resize-none"
          />
        </div>

        <button type="submit" className="w-full mt-5 py-2 bg-green-400 hover:bg-green-500 text-white font-medium rounded-md transition">
          Submit
        </button>
      </form>

    </div>
  );
};

export default Home;