import express from "express";
import { contactForm, getContacts } from "../controller/contact.controller.js";
import { getHomeProducts, homeproductcontroller } from "../controller/home.controller.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/contact", contactForm);
router.get("/getcontacts", getContacts);



// // homae page product
// router.post(
//     "/home-page-product",
//    upload.single("image"),
//     homeproductcontroller
// );
router.post(
    "/home-page-product",
    upload.single("image"),
    homeproductcontroller
);
router.get(
    "/home-page-product",
    getHomeProducts
);




export default router;