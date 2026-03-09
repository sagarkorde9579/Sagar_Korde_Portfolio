import ProjectModel from "../models/ProjectModel.js";

export const getProjects = async (req, res) => {
  try {

    const Project = await ProjectModel.find();

    if (!Project || Project.length === 0) {
      return res.json({
        success: false,
        message: "No data",
      });
    }

    return res.json({
      success: true,
      message: "Data fetch successful",
      data: Project,
    });

  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
    });
  }
};


export const saveProject = async (req, res) => {
  try {

    const { title, information,githublink,link } = req.body;
    const image = req.file ? req.file.filename : null;

    const project = new ProjectModel({
      title,
      information,
      githublink,
      link,
      image
    });

    await project.save();

    return res.json({
      success: true,
      message: "Project saved successfully",
      data: project
    });

  } catch (error) {
    return res.json({
      success: false,
      message: "Server error"
    });
  }
};