import {
  getAllTrainerDB,
  getTrainerDB,
  getTrainerLogDB,
  logTrainingDB,
} from '../models/trainerDB.js';

const getAllTrainer = async (req, res) => {
  const result = await getAllTrainerDB();

  if (result) return res.status(200).json(result);

  return res.status(500).send('Error when getting All Spieler');
};

const getTrainer = async (req, res) => {
  const { id } = req.params;

  const result = await getTrainerDB(id);

  if (result) return res.status(200).json(result);

  return res.status(404).send('Keiner Trainer vorhanden');
};

const getTrainerLog = async (req, res) => {
  const { id } = req.params;

  const result = await getTrainerLogDB(id);

  if (result) return res.status(200).json(result);

  return res.status(404).send('Keiner Trainer vorhanden');
};

const logTraining = async (req, res) => {
  const { id } = req.params;
  const { date, von, bis } = req.body;

  let vonBearbeitet = `${von.hours}:${von.minutes}:00`;
  let bisBearbeitet = `${bis.hours}:${bis.minutes}:00`;

  const result = await logTrainingDB(date, vonBearbeitet, bisBearbeitet, id);

  if (result) return res.status(200).json(result);

  return res.status(404).send('Keiner Trainer vorhanden');
};

export { getAllTrainer, getTrainer, getTrainerLog, logTraining };
