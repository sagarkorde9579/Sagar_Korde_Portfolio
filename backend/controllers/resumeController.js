import ResumeModel from "../models/ResumeModel.js";

export const getResume = async (req, res) => {
  try {

    const Resume = await ResumeModel.find();

    if (!Resume) {
      return res.json({
        success: false,
        message: "No data",
      });
    }

    return res.json({
      success: true,
      message: "Data fetch successful",
      data: Resume,
    });

  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
    });
  }
};


export const saveResume = async (req, res) => {
  try {

    const image = req.file ? req.file.filename : null;

    const resume = new ResumeModel({
      image
    });

    await resume.save();

    return res.json({
      success: true,
      message: "Resume saved successfully",
      data: resume
    });

  } catch (error) {
    return res.json({
      success: false,
      message: "Server error"
    });
  }
};