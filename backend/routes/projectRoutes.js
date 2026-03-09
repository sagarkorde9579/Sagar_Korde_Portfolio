import express from "express";
import multer from "multer";
import { getProjects, saveProject } from "../controllers/projectsController.js";

const projectRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

projectRouter.get("/projectData", getProjects);

projectRouter.post("/saveProject", upload.single("image"), saveProject);

export default projectRouter;