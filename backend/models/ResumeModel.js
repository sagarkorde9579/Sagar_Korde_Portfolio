import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  }
});

const ResumeModel = mongoose.model("Resume", resumeSchema);

export default ResumeModel;