import {
  addTrainingDBWH,
  addTrainingDB,
  getTrainingsDB,
  getTrainingDetailDB,
  getTrainingDetailSpielerDB,
  changeAnwesenheitDB,
  changeTrainingDB,
  deleteTrainingDB,
  getAllTrainingsDB,
  getAllTrainingsSpielerDB,
} from '../models/trainingDB.js';

const addTraining = async (req, res) => {
  console.log(req.body);
  const { titel, halle, datum, endDatum, treffpunkt, beginn, ende } = req.body.state;
  const { m_id } = req.body;

  // Datum neu formatieren
  let treffpunktBearbeitet = `${treffpunkt.hours}:${treffpunkt.minutes}:00`;
  let beginnBearbeitet = `${beginn.hours}:${beginn.minutes}:00`;
  let endeBearbeitet = `${ende.hours}:${ende.minutes}:00`;
  if (treffpunkt.minutes < 10)
    treffpunktBearbeitet = `${treffpunkt.hours}:0${treffpunkt.minutes}:${treffpunkt.seconds}0`;
  if (beginn.minutes < 10)
    beginnBearbeitet = `${beginn.hours}:0${beginn.minutes}:${beginn.seconds}0`;
  if (ende.minutes < 10) endeBearbeitet = `${ende.hours}:0${ende.minutes}:${ende.seconds}0`;

  //? Training erstellen welches wiederholt wird
  if (endDatum) {
    console.log('Wiederholen');
    const result = await addTrainingDBWH(
      titel,
      datum,
      treffpunktBearbeitet,
      beginnBearbeitet,
      endeBearbeitet,
      endDatum,
      halle,
      m_id,
    );
    if (result) return res.status(200).send('Training erstellt');
    return res.status(500).send('Fehler beim Erstellen des Trainings');
  } else {
    console.log('nicht wiederholen');
    const result = await addTrainingDB(
      titel,
      datum,
      treffpunktBearbeitet,
      beginnBearbeitet,
      endeBearbeitet,
      halle,
      m_id,
    );
    if (result) return res.status(200).send('Training erstellt');
    return res.status(500).send('Fehler beim Erstellen des Trainings');
  }
};

const getTrainings = async (req, res) => {
  const { id } = req.params;
  const result = await getTrainingsDB(id);

  if (result) return res.status(200).json(result);
  return res.status(500).send('Fehler beim Trainings holen');
};

const getTrainingDetail = async (req, res) => {
  const { id } = req.params;

  const result = await getTrainingDetailDB(id);
  if (result) return res.status(200).json(result);
  return res.status(500).send('Fehler beim Trainings holen');
};

const getTrainingDetailSpieler = async (req, res) => {
  const { id } = req.params;

  const result = await getTrainingDetailSpielerDB(id);
  if (result) return res.status(200).json(result);
  return res.status(500).send('Fehler beim Trainings holen');
};

const changeAnwesenheit = async (req, res) => {
  const { training_id, s_id, begründung } = req.params;
  const { kommt } = req.body;

  

  const result = await changeAnwesenheitDB(kommt, training_id, s_id);

  if (result) return res.status(200).json(result);
  return res.status(500).send('Fehler beim Anwesenheit ändern');
};

const changeTraining = async (req, res) => {
  const { id } = req.params;
  const { titel, datum, treffpunkt, start, ende, halle } = req.body.state;

  let treffpunktBearbeitet = `${treffpunkt.hours}:${treffpunkt.minutes}:00`;
  let beginnBearbeitet = `${start.hours}:${start.minutes}:00`;
  let endeBearbeitet = `${ende.hours}:${ende.minutes}:00`;

  if (treffpunkt.minutes < 10)
    treffpunktBearbeitet = `${treffpunkt.hours}:0${treffpunkt.minutes}:${treffpunkt.seconds}0`;

  if (start.minutes < 10) beginnBearbeitet = `${start.hours}:0${start.minutes}:${start.seconds}0`;

  if (ende.minutes < 10) endeBearbeitet = `${ende.hours}:0${ende.minutes}:${ende.seconds}0`;

  const result = await changeTrainingDB(
    titel,
    datum,
    treffpunktBearbeitet,
    beginnBearbeitet,
    endeBearbeitet,
    halle,
    id,
  );

  if (result) return res.status(200).json(result);
  return res.status(500).send('Fehler beim ändern des Trainings');
};

const deleteTraining = async (req, res) => {
  const { id } = req.params;

  const result = await deleteTrainingDB(id);

  if (result) return res.status(200).send('Erfolgreich gelöscht');
  return res.status(500).send('Fehler beim löschen');
};

const getAllTrainings = async (req, res) => {
  const { id } = req.params;

  const result = await getAllTrainingsDB(id);

  if (result) return res.status(200).json(result);
  return res.status(500).send('Fehler beim Holen');
};

const getAllTrainingsSpieler = async (req, res) => {
  const { id } = req.params;

  const result = await getAllTrainingsSpielerDB(id);

  if (result) return res.status(200).json(result);
  return res.status(500).send('Fehler beim Holen');
};

export {
  addTraining,
  getTrainings,
  getTrainingDetail,
  getTrainingDetailSpieler,
  changeAnwesenheit,
  changeTraining,
  deleteTraining,
  getAllTrainings,
  getAllTrainingsSpieler,
};
