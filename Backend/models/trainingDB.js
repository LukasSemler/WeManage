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

export { addTrainingDB };
