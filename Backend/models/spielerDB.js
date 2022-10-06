import { query, pool } from '../db/index.js';

const getAllSpielerDB = async () => {
  const { rows } = await query(
    "SELECT s_id, vorname, nachname, email, 'Spieler' as role, avatarpath from spieler;",
  );

  return rows;
};

const getSpielerDB = async (id) => {
  const { rows } = await query(
    `SELECT s.s_id, m.m_id, s.vorname, s.nachname, s.email, 'Spieler' as role, s.avatarpath
from spieler s
         JOIN spieler_mannschaft sm on s.s_id = sm.s_id
         JOIN mannschaft m on m.m_id = sm.m_id WHERE m.m_id = $1 ORDER BY s.vorname ASC;`,
    [id],
  );

  if (rows[0]) return rows;
  else return false;
};

const changeSpielerKommtDB = async (id, kommt, train_id) => {
  try {
    const { rows } = await query(
      'UPDATE spielerbesuchttraining SET kommt = $1 WHERE fk_s_id = $2 and fk_training_id = $3;',
      [kommt, id, train_id],
    );
  } catch (error) {
    console.log(error);
    throw error;
  }

  return true;
};

const changeSpielerSettingsDB = async ({
  id,
  vorname,
  nachname,
  email,
  passwort,
  avatare,
}) => {
  let dbPool = pool;

  try {
    await dbPool.query('BEGIN');

    const { rows } = await dbPool.query(
      passwort != 'xxxxxxxx'
        ? `UPDATE spieler SET
      vorname = $2,
      nachname = $3,
      email = $4,
      passwort = $5,
      avatarpath = $6 WHERE s_id = $1`
        : `UPDATE spieler SET
      vorname = $2,
      nachname = $3,
      email = $4,
      avatarpath = $5 
      WHERE s_id = $1
      RETURNING *`,
      passwort != 'xxxxxxxx'
        ? [id, vorname, nachname, email, passwort, avatare]
        : [id, vorname, nachname, email, avatare],
    );

    await dbPool.query('COMMIT');

    return rows[0];
  } catch (error) {
    await dbPool.query('ROLLBACK');
    console.log(error);
    return null;
  }
};

const getSpielerByIdDB = async (id) => {
  const { rows } = await query('SELECT * from spieler WHERE s_id = $1', [id]);

  if (rows[0]) return rows[0];
  else return null;
};
export {
  getAllSpielerDB,
  getSpielerDB,
  changeSpielerKommtDB,
  changeSpielerSettingsDB,
  getSpielerByIdDB,
};
