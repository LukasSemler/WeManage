import validator from 'is-my-json-valid';
import { registerDBSpieler, registerDBTrainer, loginDB } from '../models/loginRegisterDB.js';

const validateReg = validator({
  required: true,
  type: 'object',
  properties: {
    vorname: {
      required: true,
      type: 'string',
    },
    nachname: {
      required: true,
      type: 'string',
    },
    email: {
      required: true,
      type: 'string',
      format: 'email',
    },
    password: {
      required: false,
      type: 'string',
    },
    type: {
      require: true,
      type: 'string',
    },
    avatarPath: {
      required: true,
      type: 'string',
    },
  },
});

const validateLog = validator({
  required: true,
  type: 'object',
  properties: {
    email: {
      required: true,
      type: 'string',
    },
    password: {
      required: true,
      type: 'string',
    },
  },
});

const register = async (req, res) => {
  // Schauen ob die Daten OK sind
  if (!validateReg(req.body)) return res.status(400).send(validateReg.errors);

  const { vorname, nachname, email, password, type, avatarPath } = req.body;
  let result;

  if (type === 'Spieler') {
    result = await registerDBSpieler(vorname, nachname, email, password, type, avatarPath);
  } else if (type === 'Trainer') {
    result = await registerDBTrainer(vorname, nachname, email, password, type, avatarPath);
  }

  if (result && result !== 'vorhanden') return res.status(200).json(result);
  if (result === 'vorhanden') return res.status(400).send('Die Email ist bereits in verwendung');

  return res.status(500).send('Error');
};

const login = async (req, res) => {
  // Schauen ob die Daten OK sind
  if (!validateLog(req.body)) return res.status(400).send(validateLog.errors);

  const { email, password } = req.body;

  const result = await loginDB(email, password);
  console.log('result', result);

  if (result) return res.status(200).json(result);

  return res.status(500).send('Fehler beim Login');
};

export { register, login };
2