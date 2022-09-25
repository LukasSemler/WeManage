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

export { getAllSpielerDB, getSpielerDB, changeSpielerKommtDB };
