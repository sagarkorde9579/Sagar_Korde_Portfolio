import DocumentModel from "../models/DocumentModel.js";

export const getDocuments = async (req, res) => {
  try {

    const Document = await DocumentModel.find();

    if (!Document) {
      return res.json({
        success: false,
        message: "No data",
      });
    }

    return res.json({
      success: true,
      message: "Data fetch successful",
      data: Document,
    });

  } catch (error) {
    return res.json({
      success: false,
      message: "Server error",
    });
  }
};


export const saveDocuments = async (req, res) => {
  try {

    const { header, details, year } = req.body;
    const image = req.file ? req.file.filename : null;

    const document = new DocumentModel({
      header,
      details,
      year,
      image
    });

    await document.save();

    return res.json({
      success: true,
      message: "Document saved successfully",
      data: document
    });

  } catch (error) {
    return res.json({
      success: false,
      message: "Server error"
    });
  }
};