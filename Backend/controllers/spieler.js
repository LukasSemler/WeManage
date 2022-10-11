import {
  getAllSpielerDB,
  getSpielerDB,
  changeSpielerKommtDB,
  changeSpielerSettingsDB,
  getSpielerByIdDB,
  getSpielerHealthDB,
  changeSpielerHealthDB,
  getTrainerSpielerHealthDB,
  getSpielerAbwendheitenDB,
} from '../models/spielerDB.js';

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
  let { kommt, train_id, begründung } = req.body;

  kommt = Boolean(kommt);
  train_id = Number(train_id);
  id = Number(id);
  console.log(kommt);
  const result = await changeSpielerKommtDB(id, kommt, train_id, begründung);

  if (result) return res.status(200).json(result);
  return res.status(500).send('Fehler beim Kommt ändern');
};

const changeSpielerSettings = async (req, res) => {
  const neueUserDaten = req.body;

  console.log(neueUserDaten);

  //Spielerdaten ändern
  const result = await changeSpielerSettingsDB(neueUserDaten);
  if (!result) return res.status(400).send('Fehler beim Spielerdaten senden');

  //Neuen returnieren
  const neuerSpielerResult = await getSpielerByIdDB(neueUserDaten.id);

  if (neuerSpielerResult) return res.status(200).json(neuerSpielerResult);
  return res.status(400).send('Fehler beim Spielerdaten senden');
};

const getSpielerHealth = async (req, res) => {
  const { id } = req.params;

  //Get health from another File
  const result = await getSpielerHealthDB(id);

  if (result) return res.status(200).json(result);
  return res.status(400).send('Fehler beim Spielerdaten senden');
};

const patchSpielerHealth = async (req, res) => {
  const { id } = req.params;
  const { allg, ausdauer, kraft, sonstige } = req.body;

  const result = await changeSpielerHealthDB(id, allg, ausdauer, kraft, sonstige);

  if (result) return res.status(200).json(result);
  return res.status(400).send('Fehler beim Spielerdaten ändern');
};

const getTrainerSpielerHealth = async (req, res) => {
  const { id } = req.params;

  const result = await getTrainerSpielerHealthDB(id);

  if (result) return res.status(200).json(result);
  return res.status(400).send('Fehler beim Spielerdaten senden');
};

const getSpielerAbwendheiten = async (req, res) => {
  let result = await getSpielerAbwendheitenDB(req.params.s_id);

  if (result) return res.status(200).json(result);
  else return res.status(400).send('Spieler hat keine Abwesendheiten');
};

export {
  getAllSpieler,
  getSpieler,
  changeSpielerKommt,
  changeSpielerSettings,
  getSpielerHealth,
  patchSpielerHealth,
  getTrainerSpielerHealth,
  getSpielerAbwendheiten,
};
