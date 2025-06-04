import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const USER = {
  username: "admin",
  password: "admin123", 
};


router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.status(200).json({ success: true, token: "sample_token_123" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

export default router;
