import express from "express";
import multer from "multer";
import { getDocuments, saveDocuments } from "../controllers/documentController.js";

const documentRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

documentRouter.get("/documentData", getDocuments);

documentRouter.post("/saveDocuments", upload.single("image"), saveDocuments);

export default documentRouter;