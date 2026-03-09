import React from 'react'
import assets from '../../assets/assets';
import { useState } from 'react';
import { toast } from 'react-toastify';
const Documents = () => {
  const icon= assets.upload;
  const [form,setForm]=useState({
    image:null,
    header:"",
    details:"",
    year:"",
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
  
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
  }
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
  
   const formData = new FormData();
    formData.append("header",form.header);
    formData.append("details",form.details);
    formData.append("year",form.year);
    if(form.image){
    formData.append("image",form.image);
    }
  
    try{
    const res=await fetch("https://sagar-korde-portfolio.onrender.com/api/document/saveDocuments",{
      method:"POST",
      body:formData,
    })
  
    const data=await res.json();
  
    if(res.ok){
    toast.success("Document Added");
    }
    else{
      toast.error("Failed To Add document")
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
<h1 className="font-medium mb-4">Upload New Image</h1>

        
        <div className="bg-gray-100 w-20 h-20 border border-black border-dotted mb-3 rounded-md overflow-hidden">
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={form.preview || icon}
              alt="owner"
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

        <div>
          <label className="font-medium">Document Header</label>
          <input
            type="text"
            name='header'
            value={form.header}
            onChange={handleChange}
            placeholder="Enter header"
            className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="font-medium">Details</label>
          <textarea
            rows={4}
            name='details'
            value={form.details}
            onChange={handleChange}
            placeholder="Enter details"
            className="w-full h-28 sm:h-36 p-2 mt-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400 resize-none"
          />
        </div>
  <div>
          <label className="font-medium">Year</label>
          <input
            type="number"
            name='year'
            value={form.year}
            onChange={handleChange}
            placeholder="Year"
            className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        
        <button type='submit' className="w-full mt-5 py-2 bg-green-400 hover:bg-green-500 text-white font-medium rounded-md transition">
          Submit
        </button>

      </form>

    </div>
  )
}

export default Documents;
