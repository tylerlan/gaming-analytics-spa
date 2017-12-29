import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL;

/* eslint func-names: ["error", "never"] */
function get(path) {
  return axios(path)
    .then(response => response.data)
    .catch(err => {
      console.log(`Something went wrong querying ${path}\n`, err);
      return err;
    });
}

export default class Api {
  static async getPUPD(dateRange) {
    const [from, to] = dateRange; // e.g. dateRange = {from:'2017/11/04', to:'2017/12/04 '}
    console.log('API CALL ---- PUPD');
    const pupdData = await get(
      `${BASE_URL}/per-unit-per-day?from=${from}&to=${to}`
    );
    return pupdData;
  }

  static async getAGGR(dateRange) {
    const [from, to] = dateRange;
    console.log('API CALL ---- AGGR');
    const aggrData = await get(
      `${BASE_URL}/aggr-per-day?from=${from}&to=${to}`
    );
    return aggrData;
  }

  static async getMFGMIX(dateRange) {
    const [from, to] = dateRange;
    console.log('API CALL ---- MFGMIX');
    const mfgmixData = await get(
      `${BASE_URL}/manufacture?from=${from}&to=${to}`
    );
    return mfgmixData;
  }
}
