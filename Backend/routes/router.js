import express from 'express';
import asyncHandler from 'express-async-handler';
import { register, login } from '../controllers/login_register.js';

const router = express.Router();

// Register Login
router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));

export default router;
