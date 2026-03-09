import SkillModel from "../models/SkillModel.js";

export const getSkills = async (req, res) => {
  try {

    const Skill = await SkillModel.find();

    if (!Skill || Skill.length === 0) {
      return res.json({
        success: false,
        message: "No data",
      });
    }

    return res.json({
      success: true,
      message: "Data fetch successful",
      data: Skill,
    });

  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
    });
  }
};


export const saveSkill = async (req, res) => {
  try {

    const { skill, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const skillData = new SkillModel({
      skill,
      description,
      image
    });

    await skillData.save();

    return res.json({
      success: true,
      message: "Skill saved successfully",
      data: skillData
    });

  } catch (error) {
    return res.json({
      success: false,
      message: "Server error"
    });
  }
};