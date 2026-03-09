import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  information: {
    type: String,
    required: true
  },
  githublink:{
    type:String,
    required:true
  },
  link:{
    type:String,
    
  }

});

const ProjectModel = mongoose.model("Project", projectSchema);

export default ProjectModel;