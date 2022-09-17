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
export { getAllSpielerDB, getSpielerDB };
