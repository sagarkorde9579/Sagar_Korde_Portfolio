import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const storeContext = createContext(null);

const StoreContextProvider = ({ children }) => {

  const url = "http://localhost:2000";

 
  const [homeData, setHomeData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [resume, setResume] = useState(null);
  const [contacts, setContacts] = useState(null);
  const [documents, setDocuments] = useState([]);

  const fetchHome = async () => {
    try {
      const res = await axios.get(`${url}/api/home/homeData`);
      if (res.data.success) {
        setHomeData(res.data.data);
      }
    } catch (err) {
      console.log("Home fetch error:", err);
    }
  };

 const fetchAbout = async () => {
  try {
    const res = await axios.get(`${url}/api/about/aboutData`);

      

    if (res.data.success) {
      setAboutData(res.data.data);
    }

  } catch (err) {
    console.log("About fetch error:", err);
  }
};

 
  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${url}/api/project/projectData`);
      if (res.data.success) {
        setProjects(res.data.data);
      }
    } catch (err) {
      console.log("Project fetch error:", err);
    }
  };

 
  const fetchSkills = async () => {
    try {
      const res = await axios.get(`${url}/api/skill/skillData`);
      if (res.data.success) {
        setSkills(res.data.data);
      }
    } catch (err) {
      console.log("Skill fetch error:", err);
    }
  };

  
  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${url}/api/contact/contactData`);
      if (res.data.success) {
        setContacts(res.data.data);
      }
    } catch (err) {
      console.log("Contact fetch error:", err);
    }
  };


  const fetchResume = async () => {
    try {
      const res = await axios.get(`${url}/api/resume/resumeData`);
      if (res.data.success) {
        setResume(res.data.data);
      }
    } catch (err) {
      console.log("Resume fetch error:", err);
    }
  };

  const fetchDocuments = async () => {
    try {
      const res = await axios.get(`${url}/api/document/documentData`);
      if (res.data.success) {
        setDocuments(res.data.data);
      }
    } catch (err) {
      console.log("Documents fetch error:", err);
    }
  };


  useEffect(() => {
    fetchHome();
    fetchAbout();
    fetchProjects();
    fetchSkills();
    fetchContacts();
    fetchResume();
    fetchDocuments();
  }, []);

  const contextValue = {
    homeData,
    aboutData,
    projects,
    skills,
    contacts,
    resume,
    documents
  };

  return (
    <storeContext.Provider value={contextValue}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;








