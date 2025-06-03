import express from "express";
import {
  getProfile,
  login,
  register,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Auth routes
router.post("/register", register); // Register user
router.post("/login", login); // Login user
router.get("/profile", protect, getProfile); // Get user profile
router.put("/profile", protect, updateProfile); // Update user profile

module.exports = router;
