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

const changeSpielerKommtDB = async (id, kommt, train_id, begründung) => {
  try {
    const { rows } = await query(
      'UPDATE spielerbesuchttraining SET kommt = $1, abwesenheitsgrund = $4 WHERE fk_s_id = $2 and fk_training_id = $3;',
      [kommt, id, train_id, begründung],
    );
  } catch (error) {
    console.log(error);
    throw error;
  }

  return true;
};

const changeSpielerSettingsDB = async ({ id, vorname, nachname, email, passwort, avatare }) => {
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

const getSpielerHealthDB = async (id) => {
  // Get Health from Database
  const { rows } = await query('SELECT * FROM spieler_health where "fkSpieler" = $1', [id]);

  if (rows[0]) return rows;
  else return null;
};

const changeSpielerHealthDB = async (id, allg, ausdauer, kraft, sonstige) => {
  try {
    const { rows } = await query(
      'UPDATE spieler_health SET allgemein = $1, ausdauer = $2, kraft = $3, sonstige = $4 WHERE "fkSpieler" = $5 returning *;',
      [allg, ausdauer, kraft, sonstige, id],
    );

    if (rows[0]) return rows;
    return false;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getTrainerSpielerHealthDB = async (id) => {
  // Get Health from Database
  const { rows } = await query(
    `SELECT m.titel, s.vorname, s.nachname, s.avatarpath, sh.allgemein, sh.kraft, sh.ausdauer, sh.sonstige
from spieler_health sh
         JOIN spieler s on s.s_id = sh."fkSpieler"
         JOIN spieler_mannschaft sm on s.s_id = sm.s_id
         JOIN mannschaft m on m.m_id = sm.m_id WHERE m.m_id = $1`,
    [id],
  );

  console.log(rows);

  if (rows[0]) return rows;
  else return false;
};

const getSpielerAbwendheitenDB = async (s_id) => {
  const { rows } = await query(
    `SELECT
    t.titel as Training,
    t.trainingdatum as Datum,
    sbt.abwesenheitsgrund AS Grund,
    m.titel as Team
    FROM spielerbesuchttraining sbt
    JOIN spieler s on s.s_id = sbt.fk_s_id
    JOIN trainings t on t.training_id = sbt.fk_training_id
    JOIN mannschaft m on m.m_id = t.fk_m_id

    WHERE s.s_id = $1 AND sbt.kommt = false
    GROUP BY sbt.abwesenheitsgrund, t.trainingdatum, t.titel, m.titel
    HAVING t.trainingdatum < current_date
    ORDER BY trainingdatum DESC;`,
    [s_id],
  );

  console.log(rows);

  if (rows[0]) return rows;
  else return null;
};

export {
  getAllSpielerDB,
  getSpielerDB,
  changeSpielerKommtDB,
  changeSpielerSettingsDB,
  getSpielerByIdDB,
  getSpielerHealthDB,
  changeSpielerHealthDB,
  getTrainerSpielerHealthDB,
  getSpielerAbwendheitenDB,
};
