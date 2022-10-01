import { query, pool } from '../db/index.js';

const postNewsDB = async (titel, nachricht, dateTime, m_id, t_id) => {
  const { rows } = await query(
    'INSERT INTO news (titel, nachricht, m_id, t_id, datetime) VALUES ($1, $2, $3, $4, $5) returning *;',
    [titel, nachricht, m_id, t_id, dateTime],
  );

  if (rows[0]) return rows[0];

  return false;
};

const getNewsDB = async (id) => {
  const { rows } = await query(
    `SELECT n.n_id, n.titel, n.nachricht, n.dateTime, t.vorname, t.nachname, t.avatarpath
from news n
         JOIN mannschaft m on m.m_id = n.m_id
         JOIN trainer_mannschaft tm on m.m_id = tm.m_id
         JOIN trainer t on t.t_id = tm.t_id
WHERE n.t_id = t.t_id AND m.m_id = $1 ORDER BY n.dateTime ASC; `,
    [id],
  );

  if (rows[0]) return rows;

  return false;
};

const delNewsDB = async (id) => {
  await query('DELETE FROM news where n_id = $1', [id]);
};

export { postNewsDB, getNewsDB, delNewsDB };
