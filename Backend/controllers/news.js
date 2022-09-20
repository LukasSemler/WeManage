import { postNewsDB, getNewsDB } from '../models/newsDB.js';

const postNews = async (req, res) => {
  const { titel, nachricht, dateTime, m_id, t_id } = req.body;

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

export { postNews, getNews };
