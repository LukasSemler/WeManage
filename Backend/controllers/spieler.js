import { getAllSpielerDB, getSpielerDB } from '../models/spielerDB.js';

const getAllSpieler = async (req, res) => {
  const result = await getAllSpielerDB();

  if (result) return res.status(200).json(result);

  return res.status(500).send('Error when getting All Spieler');
};

const getSpieler = async (req, res) => {
  const { id } = req.params;

  const result = await getSpielerDB(id);

  if (result) return res.status(200).json(result);

  return res.status(404).send('Keiner Spieler vorhanden');
};

export { getAllSpieler, getSpieler };
