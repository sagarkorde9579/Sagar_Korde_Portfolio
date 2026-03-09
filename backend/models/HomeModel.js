import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  }
});

const HomeModel = mongoose.model("Home", homeSchema);

export default HomeModel;