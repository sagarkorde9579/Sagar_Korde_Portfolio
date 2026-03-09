import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  header: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

const DocumentModel = mongoose.model("Document", documentSchema);

export default DocumentModel;