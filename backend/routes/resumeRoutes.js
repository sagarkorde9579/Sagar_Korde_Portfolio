import express from "express";
import multer from "multer";
import { getResume, saveResume } from "../controllers/resumeController.js";

const resumeRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

resumeRouter.get("/resumeData", getResume);

resumeRouter.post("/saveResume", upload.single("image"), saveResume);

export default resumeRouter;