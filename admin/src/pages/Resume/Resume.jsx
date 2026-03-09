import React from 'react'
import { useState } from 'react';
import {toast} from "react-toastify"
import assets from '../../assets/assets';
const Resume = () => {
  const icon= assets.upload;
  const [form,setForm]=useState({
    image:null,
    preview:""
  })
  
  const handleImage=(e)=>{
    const file=e.target.files[0];
    if(file){
    setForm({
      ...form,
      image:file,
      preview:URL.createObjectURL(file),
    })
    }
  }
  

  const handleSubmit=async(e)=>{
    e.preventDefault();
  
   const formData = new FormData();
    if(form.image){
    formData.append("image",form.image);
    }
  
    try{
    const res=await fetch("https://sagar-korde-portfolio.onrender.com/api/resume/saveResume",{
      method:"POST",
      body:formData,
    })
  
    const data=await res.json();
  
    if(res.ok){
    toast.success("Resume Added");
    }
    else{
      toast.error("Failed To Add Resume")
    }
    }
  catch(error){
    toast.error("Server error");
  }
  
  
  }
  return (
<div className="flex flex-col justify-center items-center md:items-start 
w-full max-w-md md:mx-0 mx-auto p-5 sm:p-8">
      <form onSubmit={handleSubmit}>
<h1 className="font-medium mb-4">Upload Skill Image</h1>

        
        <div className="bg-gray-100 w-20 h-20 border border-black border-dotted mb-3 rounded-md overflow-hidden">
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={form.preview || icon}
              alt="resume"
              className="w-full h-full object-cover"
            />
          </label>
          <input
            type="file"
            name="image"
            id="image"
            hidden
            onChange={handleImage}
          />
        </div>

        
        <button type='submit' className="w-40 -ml-4 mt-5 py-2 bg-green-400 hover:bg-green-500 text-white font-medium rounded-md transition">
          Submit
        </button>

      </form>

    </div>
  )
}

export default Resume;
