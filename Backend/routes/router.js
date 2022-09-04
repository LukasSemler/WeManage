import express from 'express';
import asyncHandler from 'express-async-handler';
import { register, login } from '../controllers/login_register.js';
import { addTeam } from '../controllers/mannschaft.js';

const router = express.Router();

// Register Login
router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));

// Team
router.post('/addTeam', asyncHandler(addTeam));

export default router;
