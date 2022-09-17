import express from 'express';
import asyncHandler from 'express-async-handler';
import { register, login } from '../controllers/login_register.js';
import {
  addTeam,
  mannschaftenTrainer,
  addSpielerMannschaft,
  addTrainerMannschaft,
} from '../controllers/mannschaft.js';
import { getAllSpieler, getSpieler } from '../controllers/spieler.js';
import { getAllTrainer, getTrainer } from '../controllers/trainer.js';

const router = express.Router();

// Register Login
router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));

// Team
router.post('/mannschaftenTrainer', asyncHandler(mannschaftenTrainer));
router.post('/addTeam', asyncHandler(addTeam));

router.get('/getAllSpieler', asyncHandler(getAllSpieler));
router.get('/getAllTrainer', asyncHandler(getAllTrainer));

router.get('/getSpieler/:id', asyncHandler(getSpieler));
router.get('/getTrainer/:id', asyncHandler(getTrainer));

router.post('/addSpielerMannschaft', asyncHandler(addSpielerMannschaft));
router.post('/addTrainerMannschaft', asyncHandler(addTrainerMannschaft));

export default router;
