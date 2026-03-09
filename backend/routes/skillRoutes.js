import express from "express";
import multer from "multer";
import { getSkills, saveSkill } from "../controllers/skillController.js";

const skillRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

skillRouter.get("/skillData", getSkills);

skillRouter.post("/saveSkill", upload.single("image"), saveSkill);

export default skillRouter;