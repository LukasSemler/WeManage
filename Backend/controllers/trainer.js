import { getAllTrainerDB, getTrainerDB } from '../models/trainerDB.js';

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

export { getAllTrainer, getTrainer };
