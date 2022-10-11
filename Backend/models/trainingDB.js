import { query, pool } from '../db/index.js';

const addTrainingDBWH = async (
  titel,
  datum,
  treffpunktBearbeitet,
  beginnBearbeitet,
  endeBearbeitet,
  endDatum,
  halle,
  m_id,
) => {
  const { rows } = await query('SELECT * from traininginsert($1, $2, $3, $4, $5, $6, $7, $8)', [
    titel,
    datum,
    treffpunktBearbeitet,
    beginnBearbeitet,
    endeBearbeitet,
    endDatum,
    halle,
    m_id,
  ]);

  if (rows[0]) return true;

  return false;
};

const addTrainingDB = async (
  titel,
  datum,
  treffpunktBearbeitet,
  beginnBearbeitet,
  endeBearbeitet,
  halle,
  m_id,
) => {
  const { rows } = await query('SELECT * from einmaltraininginsert($1, $2, $3, $4, $5, $6, $7)', [
    titel,
    datum,
    treffpunktBearbeitet,
    beginnBearbeitet,
    endeBearbeitet,
    halle,
    m_id,
  ]);

  if (rows[0]) return true;

  return false;
};

const getTrainingsDB = async (id) => {
  const { rows } = await query(
    'SELECT * from trainings WHERE trainingdatum >= CURRENT_DATE and fk_m_id = $1 order by trainingdatum ASC LIMIT 10;',
    [id],
  );

  if (rows[0]) return rows;

  return false;
};

const getTrainingDetailDB = async (id) => {
  const { rows } = await query('SELECT * from trainings WHERE training_id = $1;', [id]);

  if (rows[0]) return rows;

  return false;
};

const getTrainingDetailSpielerDB = async (id) => {
  const { rows } = await query(
    `SELECT s2.s_id, s2.vorname, s2.nachname, s2.email, s2.avatarpath, s.kommt, s.abwesenheitsgrund, titel, training_id
from trainings
         JOIN spielerbesuchttraining s on trainings.training_id = s.fk_training_id
         JOIN spieler s2 on s2.s_id = s.fk_s_id
WHERE training_id = $1`,
    [id],
  );

  if (rows[0]) return rows;

  return false;
};

const changeAnwesenheitDB = async (kommt, training_id, s_id) => {
  const { rows } = await query(
    'UPDATE spielerbesuchttraining SET kommt = $1 where fk_training_id = $2 and fk_s_id = $3 returning *;',
    [kommt, training_id, s_id],
  );

  if (rows[0]) return rows;
  return false;
};

const changeTrainingDB = async (
  titel,
  datum,
  treffpunktBearbeitet,
  beginnBearbeitet,
  endeBearbeitet,
  halle,
  id,
) => {
  const { rows } = await query(
    `UPDATE trainings
SET titel              = $1,
    trainingdatum      = $2,
    trainingtreffpunkt = $3,
    trainingbeginn     = $4,
    trainingende       = $5,
    wo                 = $6
WHERE training_id = $7 returning *;`,
    [titel, datum, treffpunktBearbeitet, beginnBearbeitet, endeBearbeitet, halle, id],
  );

  if (rows[0]) return rows;
  return false;
};

const deleteTrainingDB = async (id) => {
  try {
    await query('SELECT * FROM trainingdelete($1);', [id]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getAllTrainingsDB = async (id) => {
  const { rows } = await query(
    `SELECT t.t_id,
       t.vorname,
       t.nachname,
       trainings.titel,

       trainings.training_id,
       trainings.trainingdatum,
       trainings.trainingtreffpunkt,
       trainings.trainingbeginn,
       trainings.trainingende,
       trainings.wo
FROM trainings
         JOIN mannschaft m on m.m_id = trainings.fk_m_id
         JOIN trainer_mannschaft tm on m.m_id = tm.m_id
         JOIN trainer t on t.t_id = tm.t_id
WHERE t.t_id = $1
ORDER BY trainingdatum ASC;`,
    [id],
  );

  if (rows[0]) return rows;
  return false;
};

const getAllTrainingsSpielerDB = async (id) => {
  const { rows } = await query(
    `SELECT s.s_id,
       s.vorname,
       s.nachname,
       trainings.titel,

       trainings.training_id,
       trainings.trainingdatum,
       trainings.trainingtreffpunkt,
       trainings.trainingbeginn,
       trainings.trainingende,
       trainings.wo
FROM trainings
         JOIN mannschaft m on m.m_id = trainings.fk_m_id
         JOIN spieler_mannschaft sm on m.m_id = sm.m_id
         JOIN spieler s on s.s_id = sm.s_id
WHERE s.s_id = $1
ORDER BY trainingdatum ASC;`,
    [id],
  );

  if (rows[0]) return rows;
  return false;
};

export {
  addTrainingDBWH,
  getTrainingsDB,
  getTrainingDetailDB,
  getTrainingDetailSpielerDB,
  changeAnwesenheitDB,
  changeTrainingDB,
  addTrainingDB,
  deleteTrainingDB,
  getAllTrainingsDB,
  getAllTrainingsSpielerDB,
};
