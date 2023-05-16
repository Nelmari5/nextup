'use strict'

// Declare Dependencies
const log = use('Logger');
const axios = require('axios');

// Init Global Variables
let auth = null;
let profile_api_endpoint = null;

// Init Class
class ProfileAPI {

  constructor (Config) {
    try {
        log.debug(`ProfileAPI :: Initiating`);

        const settings = Config.get('profileApi')
        if (!settings) {
          throw new Error(`Specify Profile Api settings under config/profileApi file`)
        }

        // API Profile Endpoint
        profile_api_endpoint = settings.url;
        auth = { username: settings.username, password: settings.password }

    } catch (ex) {
      log.error(`ProfileAPI :: ${ex.message}`)
    }
  }

  async getUser(filter){
    try {
        log.debug(`ProfileAPI :: getUser :: ${JSON.stringify(filter)}`);
        let response = await axios.post(`${profile_api_endpoint}/api/v1/profile`, filter, { auth });
        return response.data;
    } catch (ex) {
        log.error(`ProfileAPI :: getUser :: ${ex.message}`);
        throw ex;
    };
  }

  async UpdateUser(profile){
    try {
        log.debug(`ProfileAPI :: UpdateUser :: ${JSON.stringify(profile)}`);
        let response = await axios.put(`${profile_api_endpoint}/api/v1/profile`, profile, { auth });
        return response.data;
    } catch (ex) {
        log.error(`ProfileAPI :: UpdateUser :: ${ex.message}`);
        throw ex;
    };
  }

}
module.exports = ProfileAPI
