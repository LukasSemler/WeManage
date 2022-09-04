import { query, pool } from '../db/index.js';

const addTeamDB = async (titel, beschreibung, farbe, zugangscode, t_id) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const { rows } = await client.query(
      'SELECT t.t_id, titel from mannschaft JOIN trainer_mannschaft tm on mannschaft.m_id = tm.m_id JOIN trainer t on t.t_id = tm.t_id WHERE t.t_id = $1 AND titel = $2;',
      [t_id, titel],
    );

    if (rows[0]) return false;

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

export { addTeamDB };
