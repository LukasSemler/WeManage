import validator from 'is-my-json-valid';
import { registerDB } from '../models/loginRegisterDB.js';

const validate = validator({
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

const register = async (req, res) => {
  // Schauen ob die Daten OK sind
  if (!validate(req.body)) return res.status(400).send(validate.errors);

  const { vorname, nachname, email, password, type, avatarPath } = req.body;

  const result = await registerDB(vorname, nachname, email, password, type, avatarPath);

  if (result && result !== 'vorhanden') return res.status(200).json(result);
  if (result === 'vorhanden') return res.status(400).send('Die Email ist bereits in verwendung');

  return res.status(500).send('Error');
};

export { register };
