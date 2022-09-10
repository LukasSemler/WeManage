import validator from 'is-my-json-valid';
import { addTeamDB, mannschaftenTrainerDB } from '../models/mannschaftDB.js';

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

export { addTeam, mannschaftenTrainer };
