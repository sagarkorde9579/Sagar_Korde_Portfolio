import React, { useState } from 'react'
import assets from "../../assets/assets"
import { toast } from 'react-toastify';
const Skills = () => {
const icon= assets.upload;
const [form,setForm]=useState({
  image:null,
  skill:"",
  description:"",
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
  formData.append("skill",form.skill);
  formData.append("description",form.description);
  if(form.image){
  formData.append("image",form.image);
  }

  try{
  const res=await fetch("http://localhost:2000/api/skill/saveSkill",{
    method:"POST",
    body:formData,
  })

  const data=await res.json();

  if(res.ok){
  toast.success("Skill Added");
  setForm({
    image:"",
    skill:"",
    description:""
  })
  }
  else{
    toast.error("Failed To Add Skill")
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
          <label className="font-medium">Skill</label>
          <input
            type="text"
            name="skill"
            value={form.skill}
            onChange={handleChange}
            placeholder="enter project skill"
            className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
       
        <div>
          <label className="font-medium">Skill Description </label>
          <textarea
            rows={4}
            value={form.description}
            name='description'
            onChange={handleChange}
            placeholder="Enter Skill Information"
            className="w-full h-28 sm:h-36 p-2 mt-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400 resize-none"
          />
        </div>

        <button type='submit' className="w-full mt-5 py-2 bg-green-400 hover:bg-green-500 text-white font-medium rounded-md transition">
          Submit
        </button>

      </form>

    </div>
  )
}

export default Skills;
