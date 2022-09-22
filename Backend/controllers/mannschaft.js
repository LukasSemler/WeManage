import validator from 'is-my-json-valid';
import {
  addTeamDB,
  mannschaftenTrainerDB,
  addSpielerMannschaftDB,
  addTrainerMannschaftDB,
  deleteTrainerMannschaftDB,
  mannschaftenSpielerDB,
  deleteSpielerMannschaftDB,
  getCodeDB,
} from '../models/mannschaftDB.js';

const validateAdd = validator({
  required: true,
  type: 'object',
  properties: {
    titel: {
      required: true,
      type: 'string',
    },
    bescheibung: {
      required: false,
      type: 'string',
    },
    farbe: {
      required: true,
      type: 'string',
    },
    zugangscode: {
      required: true,
      type: 'string',
    },
    t_id: {
      required: true,
      type: 'number',
    },
  },
});

const addTeam = async (req, res) => {
  // Schauen ob die Daten OK sind
  if (!validateAdd(req.body)) return res.status(400).send(validateAdd.errors);
  console.log(req.body);

  const { titel, beschreibung, farbe, zugangscode, t_id } = req.body;
  const result = await addTeamDB(titel, beschreibung, farbe, zugangscode, t_id);

  if (result) return res.status(200).json(result);

  return res.status(500).send('Fehler');
};

const mannschaftenTrainer = async (req, res) => {
  console.log(req.body);
  const { t_id } = req.body;
  const result = await mannschaftenTrainerDB(t_id);

  if (result) return res.status(200).json(result);

  return res.status(500).send('Fehler');
};

const mannschaftenSpieler = async (req, res) => {
  const result = await mannschaftenSpielerDB(req.params.s_id);

  if (result) return res.status(200).json(result);
  return res.status(500).send('Leider keine Mannschaften vorhanden :(');
};

const addSpielerMannschaft = async (req, res) => {
  const s_id = req.body.s_id;
  const m_id = Number(req.body.m_id);

  const result = await addSpielerMannschaftDB(s_id, m_id);

  if (result) return res.status(200).json(result);
  console.log(result);

  return res.status(500).send('Fehler beim Einfügen');
};

const addTrainerMannschaft = async (req, res) => {
  const t_id = req.body.t_id;
  const m_id = Number(req.body.m_id);

  const result = await addTrainerMannschaftDB(t_id, m_id);

  if (result) return res.status(200).json(result);
  console.log(result);

  return res.status(500).send('Fehler beim Einfügen');
};

const deleteTrainerMannschaftDel = async (req, res) => {
  const { m_id, t_id } = req.params;

  console.log(m_id, t_id);

  await deleteTrainerMannschaftDB(m_id, t_id);

  return res.status(200).send('Trainer gelöscht');
};

const deleteSpielerMannschaftDel = async (req, res) => {
  const { m_id, s_id } = req.params;

  console.log(m_id, s_id);

  await deleteSpielerMannschaftDB(m_id, s_id);

  return res.status(200).send('Trainer gelöscht');
};

const getCode = async (req, res) => {
  const { id } = req.params;

  const result = await getCodeDB(id);

  if (result) return res.status(200).json(result);

  return res.status(500).send('Error when getting the code');
};

export {
  addTeam,
  mannschaftenTrainer,
  addSpielerMannschaft,
  addTrainerMannschaft,
  deleteTrainerMannschaftDel,
  deleteSpielerMannschaftDel,
  mannschaftenSpieler,
  getCode,
};
