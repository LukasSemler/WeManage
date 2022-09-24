import express from 'express';
import asyncHandler from 'express-async-handler';
import { register, login } from '../controllers/login_register.js';
import {
  addTeam,
  mannschaftenTrainer,
  addSpielerMannschaft,
  addTrainerMannschaft,
  deleteTrainerMannschaftDel,
  deleteSpielerMannschaftDel,
  mannschaftenSpieler,
  getCode,
} from '../controllers/mannschaft.js';
import { getAllSpieler, getSpieler } from '../controllers/spieler.js';
import { getAllTrainer, getTrainer } from '../controllers/trainer.js';
import { postNews, getNews, delNews } from '../controllers/news.js';
import { addTraining, getTrainings } from '../controllers/training.js';

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
router.get('/getCode/:id', asyncHandler(getCode));

router.delete('/trainerMannschaftDel/:t_id/:m_id', asyncHandler(deleteTrainerMannschaftDel));
router.delete('/spielerMannschaftDel/:s_id/:m_id', asyncHandler(deleteSpielerMannschaftDel));

router.post('/postNews', asyncHandler(postNews));
router.get('/getNews/:id', asyncHandler(getNews));
router.delete('/delNews/:id', asyncHandler(delNews));

//Spieler
router.get('/mannschaftenSpieler/:s_id', asyncHandler(mannschaftenSpieler));

router.post('/addTraining', asyncHandler(addTraining));
router.get('/getTrainings/:id', asyncHandler(getTrainings));

export default router;
