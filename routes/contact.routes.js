import express from "express";
import { contactForm, getContacts } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/contact", contactForm);
router.get("/getcontacts", getContacts);

export default router;