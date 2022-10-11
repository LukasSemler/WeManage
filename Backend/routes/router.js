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
  sJoinTeam,
  tJoinTeam,
} from '../controllers/mannschaft.js';
import {
  getAllSpieler,
  getSpieler,
  changeSpielerKommt,
  changeSpielerSettings,
  getSpielerHealth,
  patchSpielerHealth,
  getSpielerAbwendheiten,
  getTrainerSpielerHealth,
} from '../controllers/spieler.js';
import { getAllTrainer, getTrainer } from '../controllers/trainer.js';
import { postNews, getNews, delNews } from '../controllers/news.js';
import {
  addTraining,
  getTrainings,
  getTrainingDetail,
  getTrainingDetailSpieler,
  changeAnwesenheit,
  changeTraining,
  deleteTraining,
  getAllTrainings,
  getAllTrainingsSpieler,
} from '../controllers/training.js';

const router = express.Router();

// Register Login
router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));

// Team
router.get('/mannschaftenTrainer/:id', asyncHandler(mannschaftenTrainer));
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
router.get('/getTrainingDetail/:id', asyncHandler(getTrainingDetail));
router.get('/getTrainingDetailSpieler/:id', asyncHandler(getTrainingDetailSpieler));

router.patch('/changeSpielerData', asyncHandler(changeSpielerSettings));

router.patch('/changeSpielerKommt/:id', asyncHandler(changeSpielerKommt));
router.patch('/changeAnwesenheit/:training_id/:s_id', asyncHandler(changeAnwesenheit));
router.get("/abwesenheiten/:s_id", asyncHandler(getSpielerAbwendheiten))


router.patch('/changeTraining/:id', asyncHandler(changeTraining));
router.delete('/delTraining/:id', asyncHandler(deleteTraining));

router.post('/sJoinTeam', asyncHandler(sJoinTeam));
router.post('/tJoinTeam', asyncHandler(tJoinTeam));

router.get('/getAllTrainings/:id', asyncHandler(getAllTrainings));
router.get('/getAllTrainingsSpieler/:id', asyncHandler(getAllTrainingsSpieler));

router.get('/spielerHealth/:id', asyncHandler(getSpielerHealth));
router.get('/trainerSpielerHealth/:id', asyncHandler(getTrainerSpielerHealth));
router.patch('/spielerHealth/:id', asyncHandler(patchSpielerHealth));


export default router;
