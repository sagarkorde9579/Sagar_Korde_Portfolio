import React, { useState } from 'react'
import { toast } from "react-toastify";

const Contact = () => {

const [form,setForm] = useState({
  phone:"",
  linkedin:"",
  github:""
})

const handleChanges=(e)=>{
  setForm({
    ...form,
    [e.target.name]:e.target.value
  })
}

const handleSubmit=async(e)=>{
  e.preventDefault();

  try{
    const res = await fetch("http://localhost:2000/api/contact/updateContact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(form)
    })

    const data = await res.json();

if(data.success){
  toast.success("Contact Updated Successfully");
}else{
  toast.error(data.message);
}

  }catch(error){
    toast.error("Server error");
  }
}

return (
<div className="flex flex-col justify-center items-center md:items-start 
w-full max-w-md md:mx-0 mx-auto p-5 sm:p-8">

<form onSubmit={handleSubmit}>

<div>
<label className="font-medium">Phone No</label>
<input
type="text"
name="phone"
value={form.phone}
onChange={handleChanges}
placeholder="Enter Phone"
className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
/>
</div>

<div>
<label className="font-medium">LinkedIn</label>
<input
type="text"
name="linkedin"
value={form.linkedin}
onChange={handleChanges}
placeholder="Enter LinkedIn link"
className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
/>
</div>

<div>
<label className="font-medium">Email</label>
<input
type="text"
name="github"
value={form.github}
onChange={handleChanges}
placeholder="Enter Email"
className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
/>
</div>

<button
type="submit"
className="w-full mt-5 py-2 bg-green-400 hover:bg-green-500 text-white font-medium rounded-md transition"
>
Submit
</button>

</form>

</div>
)
}

export default Contact;