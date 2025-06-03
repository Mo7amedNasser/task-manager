import express from "express";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";
import { getAllUsers, getUserById } from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get all users with pagination
 * @access  Private (Admin only)
 * @query   {number} page - Page number (default: 1)
 * @query   {number} limit - Users per page (default: 10)
 */
router.get("/", protect, adminOnly, getAllUsers);

/**
 * @route   GET /api/users/:id
 * @desc    Get user by ID
 * @access  Private (Admin or Member)
 * @param   {string} id - User ID
 */
router.get("/:id", protect, getUserById);

export default router;
