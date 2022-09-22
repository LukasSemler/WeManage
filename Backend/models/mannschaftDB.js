import { query, pool } from '../db/index.js';

const addTeamDB = async (titel, beschreibung, farbe, zugangscode, t_id) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const { rows } = await client.query(
      'SELECT t.t_id, titel from mannschaft JOIN trainer_mannschaft tm on mannschaft.m_id = tm.m_id JOIN trainer t on t.t_id = tm.t_id WHERE t.t_id = $1 AND titel = $2;',
      [t_id, titel],
    );
    console.log(rows[0]);
    if (rows[0]) return false;

    // Mannschaft erstellen
    const { rows: team } = await client.query(
      'INSERT INTO mannschaft (titel, zugangscode, farbe, beschreibung) VALUES ($1, $2, $3, $4) returning *;',
      [titel, zugangscode, farbe, beschreibung],
    );

    // Verknüpfnung erstellen
    await client.query('INSERT INTO trainer_mannschaft (t_id, m_id) VALUES ($1, $2)', [
      t_id,
      team[0].m_id,
    ]);

    await client.query('COMMIT');

    return team;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const mannschaftenTrainerDB = async (t_id) => {
  const { rows } = await query(
    `SELECT m.m_id, beschreibung, farbe, zugangscode, titel
from mannschaft m
         JOIN trainer_mannschaft tm on m.m_id = tm.m_id
         JOIN trainer t on t.t_id = tm.t_id WHERE t.t_id = $1`,
    [t_id],
  );

  console.log(rows[0]);

  if (rows[0]) return rows;

  return false;
};

const addSpielerMannschaftDB = async (s_id, m_id) => {
  const client = await pool.connect();

  try {
    //Transaktion beginnen
    await client.query('BEGIN');

    const { rows: vorhanden } = await client.query(
      'SELECT s_id from spieler_mannschaft WHERE m_id = $1 and s_id = $2 ',
      [m_id, s_id],
    );

    if (vorhanden[0]) return false;

    const { rows: insert } = await client.query(
      'INSERT INTO spieler_mannschaft (s_id, m_id) VALUES ($1, $2) returning *;',
      [s_id, m_id],
    );

    if (insert[0]) {
      await client.query('COMMIT');
      return insert[0];
    }

    return false;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const addTrainerMannschaftDB = async (t_id, m_id) => {
  const client = await pool.connect();

  try {
    //Transaktion beginnen
    await client.query('BEGIN');

    const { rows: vorhanden } = await client.query(
      'SELECT t_id from trainer_mannschaft WHERE m_id = $1 and t_id = $2 ',
      [m_id, t_id],
    );

    if (vorhanden[0]) return false;

    const { rows: insert } = await client.query(
      'INSERT INTO trainer_mannschaft (t_id, m_id) VALUES ($1, $2) returning *;',
      [t_id, m_id],
    );

    if (insert[0]) {
      await client.query('COMMIT');
      return insert[0];
    }

    return false;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const deleteTrainerMannschaftDB = async (m_id, t_id) => {
  await query('DELETE FROM trainer_mannschaft WHERE m_id = $1 and t_id = $2;', [m_id, t_id]);
};

const deleteSpielerMannschaftDB = async (m_id, s_id) => {
  await query('DELETE FROM spieler_mannschaft WHERE m_id = $1 and s_id = $2;', [m_id, s_id]);
};

const mannschaftenSpielerDB = async (s_id) => {
  const { rows } = await query(
    'SELECT m.* FROM mannschaft m JOIN spieler_mannschaft sm on m.m_id = sm.m_id WHERE sm.s_id = $1',
    [s_id],
  );

  console.log(rows);

  if (rows[0]) return rows;
  return false;
};

const getCodeDB = async (id) => {
  const { rows } = await query('SELECT zugangscode from mannschaft where m_id = $1;', [id]);

  if (rows[0]) return rows[0];
  
  return false;
};

export {
  addTeamDB,
  mannschaftenTrainerDB,
  addSpielerMannschaftDB,
  addTrainerMannschaftDB,
  deleteTrainerMannschaftDB,
  deleteSpielerMannschaftDB,
  mannschaftenSpielerDB,
  getCodeDB,
};
