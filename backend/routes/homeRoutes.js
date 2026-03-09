import express from "express";
import multer from "multer";
import { getHome, updateHome } from "../controllers/homeController.js";

const homeRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

homeRouter.get("/homeData", getHome);
homeRouter.post("/update", upload.single("image"), updateHome);

export default homeRouter;