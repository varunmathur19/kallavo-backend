import express from "express";
import { contactForm, getContacts } from "../controller/contact.controller.js";
import { editHomeProductController, getHomeProducts, homeproductcontroller ,  } from "../controller/home.controller.js";
import { upload } from "../middleware/upload.js";
import { collectionhome, getCollectionHome } from "../controller/collectionhome.controller.js";
import { loginController } from "../controller/auth.controller.js";

const router = express.Router();


router.post("/login",loginController);
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
router.put(
  "/edit-home-product/:id",
  editHomeProductController
);


//home page collection image api 
router.post(
  "/collection-home",
  upload.single("image"),
  collectionhome
);

router.get(
  "/collection-home",
  getCollectionHome
);




export default router;