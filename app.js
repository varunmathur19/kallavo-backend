import dns from "dns";

dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);

import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import router from "./routes/contact.routes.js";

dotenv.config();

const app = express();

console.log(process.env.MONGODB_URI);

connectDB();

app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});