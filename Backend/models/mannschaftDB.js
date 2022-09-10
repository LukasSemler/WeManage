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

export { addTeamDB, mannschaftenTrainerDB };
