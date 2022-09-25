import { getAllSpielerDB, getSpielerDB, changeSpielerKommtDB } from '../models/spielerDB.js';

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

const changeSpielerKommt = async (req, res) => {
  let { id } = req.params;
  let { kommt, train_id } = req.body;

  kommt = Boolean(kommt);
  train_id = Number(train_id);
  id = Number(id);
  console.log(kommt);
  const result = await changeSpielerKommtDB(id, kommt, train_id);

  if (result) return res.status(200).json(result);
  return res.status(500).send('Fehler beim Kommt ändern');
};

export { getAllSpieler, getSpieler, changeSpielerKommt };
