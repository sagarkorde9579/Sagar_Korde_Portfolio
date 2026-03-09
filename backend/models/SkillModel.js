import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const SkillModel = mongoose.models.Skill || mongoose.model("Skill", skillSchema);

export default SkillModel;