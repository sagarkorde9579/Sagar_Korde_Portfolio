import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  interest: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const AboutModel = mongoose.model("About", aboutSchema);

export default AboutModel;