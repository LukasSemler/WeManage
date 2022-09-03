import { query, pool } from '../db/index.js';

const registerDB = async (vorname, nachname, email, password, type, avatarPath) => {
  const client = await pool.connect();

  try {
    // Transaktion beginnen
    await client.query('BEGIN');
    // Schaueb ob die Mail schon in Verwendung ist
    const { rows: spielerVorhanden } = await client.query(
      'SELECT * FROM spieler WHERE email = $1;',
      [email],
    );

    const { rows: trainerVorhanden } = await client.query(
      'SELECT * FROM trainer WHERE email = $1;',
      [email],
    );

    // Schauen ob der User Trainer oder Spieler ist und schauen ob schon ein ACC vorhanden
    if (type === 'Spieler' && !spielerVorhanden[0] && !trainerVorhanden[0]) {
      const { rows: spieler } = await client.query(
        'INSERT INTO spieler (vorname, nachname, email, passwort, avatarpath) VALUES ($1, $2, $3, $4, $5) returning *;',
        [vorname, nachname, email, password, avatarPath],
      );

      if (spieler[0]) {
        await client.query('COMMIT');
        return spieler[0];
      }
    } else if (type === 'Trainer' && !spielerVorhanden[0] && !trainerVorhanden[0]) {
      const { rows: trainer } = await client.query(
        'INSERT INTO spieler (vorname, nachname, email, passwort, avatarpath) VALUES ($1, $2, $3, $4, $5) returning *;',
        [vorname, nachname, email, password, avatarPath],
      );

      if (trainer[0]) {
        await client.query('COMMIT');
        return trainer[0];
      }
    } else if (spielerVorhanden[0] || trainerVorhanden[0]) return 'vorhanden';
    else return false;
  } catch (error) {
    console.log(error.message);
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

export { registerDB };
