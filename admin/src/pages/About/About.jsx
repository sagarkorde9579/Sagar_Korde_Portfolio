import React, { useState } from "react";
import assets from "../../assets/assets";
import { toast } from "react-toastify";

const About = () => {
  const icon = assets.upload;

  const [form, setForm] = useState({
    image: null,
    preview: "",
    interest: "",
    description: "",
  });

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setForm((prev) => ({
        ...prev,
        image: file,
        preview: URL.createObjectURL(file),
      }));
    }
  };

  const handleChanges = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.interest || !form.description) {
      toast.error("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("interest", form.interest);
    formData.append("description", form.description);

    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      const res = await fetch(
        "https://sagar-korde-portfolio.onrender.com/api/about/saveAbout",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Added Successfully");

        // ✅ Reset form
        setForm({
          image: null,
          preview: "",
          interest: "",
          description: "",
        });
      } else {
        toast.error(data.message || "Failed to add");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

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
          <label className="font-medium">Enter Interest</label>
          <input
            type="text"
            name="interest"
            value={form.interest}
            onChange={handleChanges}
            placeholder="Interest"
            className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="font-medium">Enter Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChanges}
            rows={4}
            placeholder="Enter description"
            className="w-full h-28 sm:h-36 p-2 mt-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400 resize-none"
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
  );
};

export default About;
// import React, { useState } from "react";
// import assets from "../../assets/assets";
// import { toast } from "react-toastify";

// const About = () => {
//   const icon = assets.upload;

//   const [form, setForm] = useState({
//     image: null,
//     preview: "",
//     interest: "",
//     description: "",
//   });

  
//   const handleImage = (e) => {
//     const file = e.target.files[0]; // ✅ files not file
//     if (file) {
//       setForm((prev) => ({
//         ...prev,
//         image: file,
//         preview: URL.createObjectURL(file),
//       }));
//     }
//   };

//   const handleChanges = (e) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(); 
//     formData.append("interest", form.interest);
//     formData.append("description", form.description);

//     if (form.image) {
//       formData.append("image", form.image);
//     }

//     try {
//       const res = await fetch(
//         "https://sagar-korde-portfolio.onrender.com/api/about/saveAbout",
//         {
//           method: "POST",
//           body: formData, 
//         }
//       );

//       const data = await res.json();

//       if (res.ok) {
//   toast.success("Added Successfully");
// } else {
//   toast.error(data.message || "Failed to add");
// }
//     } catch (error) {
//       toast.error("Server error");
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center md:items-start 
//     w-full max-w-md md:mx-0 mx-auto p-5 sm:p-8">
//       <form onSubmit={handleSubmit}>
//         <h1 className="font-medium mb-4">Upload New Image</h1>

//         <div className="bg-gray-100 w-20 h-20 border border-black border-dotted mb-3 rounded-md overflow-hidden">
//           <label htmlFor="image" className="cursor-pointer">
//             <img
//               src={form.preview || icon}
//               alt="owner"
//               className="w-full h-full object-cover"
//             />
//           </label>
//           <input
//             type="file"
//             name="image"
//             id="image"
//             hidden
//             onChange={handleImage}
//           />
//         </div>

   
//         <div>
//           <label className="font-medium">Enter Interest</label>
//           <input
//             type="text"
//             name="interest"
//             value={form.interest}
//             onChange={handleChanges}
//             placeholder="Interest"
//             className="w-full p-2 mt-2 mb-4 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

  
//         <div>
//           <label className="font-medium">Enter Description</label>
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChanges}
//             rows={4}
//             placeholder="Enter description"
//             className="w-full h-28 sm:h-36 p-2 mt-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400 resize-none"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full mt-5 py-2 bg-green-400 hover:bg-green-500 text-white font-medium rounded-md transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default About;
