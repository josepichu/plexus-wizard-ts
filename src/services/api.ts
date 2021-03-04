import { Response } from '../models/Api/Api';

const PRUEBA_KO = 'pruebaKO123';

const RESPONSE_OK: Response = { status: 200 };
const RESPONSE_KO: Response = { status: 401 };

const submitForm = (pass, repass?, optionalQuestion?): Promise<Response> =>
  new Promise((resolve, reject) =>
    setTimeout(() => (pass !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO)), 3000),
  );

export { submitForm };
