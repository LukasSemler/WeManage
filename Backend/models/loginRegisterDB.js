import { query, pool } from '../db/index.js';

const registerDBSpieler = async (vorname, nachname, email, password, type, avatarPath) => {
  const client = await pool.connect();
  try {
    // Transaktion beginnen
    await client.query('BEGIN');
    // Schaueb ob die Mail schon in Verwendung ist
    const { rows: spielerVorhanden } = await client.query(
      'SELECT * FROM spieler WHERE email = $1;',
      [email],
    );

    // Wenn ja, abbrechen
    if (spielerVorhanden[0]) return 'vorhanden';

    // Spieler einfügen
    const { rows: spieler } = await client.query(
      'INSERT INTO spieler (vorname, nachname, email, passwort, avatarpath) VALUES ($1, $2, $3, $4, $5) returning *;',
      [vorname, nachname, email, password, avatarPath],
    );

    if (spieler[0]) {
      const { rows: health } = await client.query(
        'INSERT INTO spieler_health ("fkSpieler") VALUES ($1) returning *',
        [spieler[0].s_id],
      );

      if (health[0]) {
        await client.query('COMMIT');
        return spieler[0];
      }
    }

    return false;
  } catch (error) {
    console.log(error.message);
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const registerDBTrainer = async (vorname, nachname, email, password, type, avatarPath) => {
  const client = await pool.connect();
  try {
    // Transaktion beginnen
    await client.query('BEGIN');
    const { rows: trainerVorhanden } = await client.query(
      'SELECT * FROM trainer WHERE email = $1;',
      [email],
    );

    // Wenn ja, abbrechen
    if (trainerVorhanden[0]) return 'vorhanden';

    const { rows: trainer } = await client.query(
      'INSERT INTO trainer (vorname, nachname, email, passwort, avatarpath) VALUES ($1, $2, $3, $4, $5) returning *;',
      [vorname, nachname, email, password, avatarPath],
    );

    if (trainer[0]) {
      await client.query('COMMIT');
      return trainer[0];
    }

    return false;
  } catch (error) {
    console.log(error.message);
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const loginDB = async (email, password) => {
  const { rows: spieler } = await query(
    'SELECT * FROM spieler WHERE email = $1 and passwort = $2',
    [email, password],
  );
  const { rows: trainer } = await query(
    'SELECT * FROM trainer WHERE email = $1 and passwort = $2',
    [email, password],
  );

  console.log(spieler[0], trainer[0]);

  if (spieler[0]) return { data: spieler[0], type: 'Spieler' };
  if (trainer[0]) return { data: trainer[0], type: 'Trainer' };

  return false;
};

export { registerDBSpieler, registerDBTrainer, loginDB };
