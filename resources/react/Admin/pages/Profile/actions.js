const axios = require('axios');
import { Notify } from '../../hooks';

const tag = `Profile :: Home`

export const getUser = async ({ id }) => {
  try {
    console.log(`${tag} :: getUser :: ${id}`);

    let userId = id
    console.log(`${tag} :: getUser :: ${userId}`);

    let url = '/api/v1/profile/edit/:id';
    let { data: { competition } } = await axios.post(url, { userId });

    console.log(`${tag} :: getUser :: ${userId}`);
    return competition
  } catch (ex) {
    console.error(`${tag} :: getUser :: ${id} :: ${ex.message}`);
    throw ex;
  }
}
