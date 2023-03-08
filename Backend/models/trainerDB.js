import { query, pool } from '../db/index.js';

const getAllTrainerDB = async () => {
  const { rows } = await query(
    "SELECT t_id, vorname, nachname, email, 'Trainer' as role, avatarpath from trainer;",
  );

  return rows;
};

const getTrainerDB = async (id) => {
  const { rows } = await query(
    `SELECT t.t_id, m.m_id, t.vorname, t.nachname, t.email, 'Trainer' as role, t.avatarpath
from Trainer t
         JOIN trainer_mannschaft tm on t.t_id = tm.t_id
         JOIN mannschaft m on tm.m_id = m.m_id WHERE m.m_id = $1 ORDER BY t.vorname ASC;`,
    [id],
  );

  if (rows[0]) return rows;
  else return false;
};

const getTraininerByIdDB = async (id) => {
  const { rows } = await query('SELECT * from trainer WHERE t_id = $1', [id]);
  if (rows[0]) return rows[0];
  return null;
};

const getTrainerLogDB = async (id) => {
  const { rows } = await query('SELECT * FROM "trainerLog" WHERE fk_trainer = $1', [id]);
  if (rows[0]) return rows;
  return null;
};

const logTrainingDB = async (date, von, bis, id) => {
  const { rows } = await query(
    'INSERT INTO "trainerLog" (date, von, bis, fk_trainer) VALUES ($1, $2, $3, $4) RETURNING *',
    [date, von, bis, id],
  );
  if (rows[0]) return rows[0];
  return null;
};

export { getAllTrainerDB, getTrainerDB, getTraininerByIdDB, getTrainerLogDB, logTrainingDB };
