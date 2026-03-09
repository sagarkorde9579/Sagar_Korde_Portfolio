import ContactModel from "../models/ContactModel.js";

export const getContact = async (req, res) => {
  try {

    const ContactData = await ContactModel.findOne();

    if (!ContactData) {
      return res.json({
        success: false,
        message: "No contact data"
      });
    }

    return res.json({
      success: true,
      message: "Fetch data",
      data: ContactData
    });

  } catch (error) {
    
    return res.json({
      success: false,
      message: "Server error"
    });
  }
};


export const updateContact = async (req, res) => {
  try {

    const { phone, linkedin, github } = req.body;


    if (!phone || !linkedin || !github) {
      return res.json({
        success: false,
        message: "All fields are required"
      });
    }

    let contact = await ContactModel.findOne();

    if (!contact) {
      contact = new ContactModel({
        phone,
        linkedin,
        github
      });
    } else {
      contact.phone = phone;
      contact.linkedin = linkedin;
      contact.github = github;
    }

    await contact.save();

    return res.json({
      success: true,
      message: "Contact Updated Successfully",
      data: contact
    });

  } catch (error) {
  

    return res.json({
      success: false,
      message: "Server error"
    });
  }
};