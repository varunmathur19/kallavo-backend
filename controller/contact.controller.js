import Contact from "../models/contact.model.js";

export const contactForm = async (req, res) => {
  try {
    const { fullName, subject, email, message } = req.body;

    if (!fullName || !subject || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const contact = await Contact.create({
      fullName,
      subject,
      email,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: contact,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    return res.status(200).json({
      success: true,
      message: "Contacts fetched successfully.",
      data: contacts,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};