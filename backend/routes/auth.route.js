import express from "express";
import {
  getProfile,
  login,
  register,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

// Auth routes
router.post("/register", register); // Register user
router.post("/login", login); // Login user
router.get("/profile", protect, getProfile); // Get user profile
router.put("/profile", protect, updateProfile); // Update user profile

// Upload image
router.post("/upload-image", protect, upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const avatar = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`;
    res.status(200).json({
      message: "File uploaded successfully",
      avatar,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error uploading file",
      error: error.message,
    });
  }
});

export default router;
