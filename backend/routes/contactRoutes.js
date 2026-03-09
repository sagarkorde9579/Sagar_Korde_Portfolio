import express from "express";
import multer from "multer";
import { getContact, updateContact } from "../controllers/contactController.js";

const contactRouter = express.Router();
const upload = multer();

contactRouter.get("/contactData",getContact);

// ⭐ important
contactRouter.post("/updateContact",updateContact);

export default contactRouter;