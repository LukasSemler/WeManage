import express from 'express';
import asyncHandler from 'express-async-handler';
import { register } from '../controllers/login_register.js';

const router = express.Router();

// Register Login
router.post('/register', asyncHandler(register));
router.get('/test', (req, res) => res.status(200).send('OK'));

export default router;
