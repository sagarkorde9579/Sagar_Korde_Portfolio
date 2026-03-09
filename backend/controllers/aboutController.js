import AboutModel from "../models/AboutModel.js";

export const getAbout = async (req, res) => {
  try {

    const About = await AboutModel.find();

    if (!About) {
      return res.json({
        success: false,
        message: "No data",
      });
    }

    return res.json({
      success: true,
      message: "Data fetch successful",
      data: About,
    });

  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
    });
  }
};


export const saveAbout = async (req, res) => {
  try {

    const { interest, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const About = new AboutModel({
      interest,
      description,
      image
    });

    await About.save();

    return res.json({
      success: true,
      message: "Data Saved Successfully",
      data: About
    });

  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: "Server error"
    });
  }
};