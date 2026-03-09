import express from "express";
import { getAbout, saveAbout } from "../controllers/aboutController.js";
import multer from "multer";

const aboutRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

aboutRouter.get("/aboutData", getAbout);

aboutRouter.post("/saveAbout", upload.single("image"), saveAbout);

export default aboutRouter;