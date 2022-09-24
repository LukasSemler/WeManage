import { query, pool } from '../db/index.js';

const addTrainingDB = async (
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

const getTrainingsDB = async (id) => {
  const { rows } = await query(
    'SELECT * from trainings WHERE trainingdatum >= CURRENT_DATE and fk_m_id = $1 order by trainingdatum ASC LIMIT 5;',
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
    `SELECT s2.vorname, s2.nachname, s2.email, s2.avatarpath, s.kommt, titel, training_id
from trainings
         JOIN spielerbesuchttraining s on trainings.training_id = s.fk_training_id
         JOIN spieler s2 on s2.s_id = s.fk_s_id
WHERE training_id = $1`,
    [id],
  );

  if (rows[0]) return rows;

  return false;
};

export { addTrainingDB, getTrainingsDB, getTrainingDetailDB, getTrainingDetailSpielerDB };