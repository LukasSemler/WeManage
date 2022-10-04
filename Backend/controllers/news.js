import { postNewsDB, getNewsDB, delNewsDB } from '../models/newsDB.js';

const postNews = async (req, res) => {
  const { titel, nachricht, dateTime, m_id, t_id } = req.body;
  console.log(titel, nachricht, dateTime, m_id, t_id);

  const result = await postNewsDB(titel, nachricht, dateTime, m_id, t_id);

  if (result) return res.status(200).json(result);

  return res.status(500).send('Fehler beim News einfügen');
};

const getNews = async (req, res) => {
  const { id } = req.params;

  const result = await getNewsDB(id);

  if (result) return res.status(200).json(result);
  else return res.status(404).send('Keine News vorhanden');
};

const delNews = async (req, res) => {
  const { id } = req.params;

  await delNewsDB(id);

  return res.status(200).send('News erfolgreich gelöscht');
};

export { postNews, getNews, delNews };
