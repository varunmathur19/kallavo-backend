import express from "express";
import { contactForm, getContacts } from "../controller/contact.controller.js";
import { getHomeProducts, homeproductcontroller } from "../controller/home.controller.js";

const router = express.Router();

router.post("/contact", contactForm);
router.get("/getcontacts", getContacts);



// homae page product
router.post(
    "/home-page-product",
    homeproductcontroller
);
router.get(
    "/home-page-product",
    getHomeProducts
);




export default router;