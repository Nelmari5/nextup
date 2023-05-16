'use strict';

//Declare Dependencies
const log = use('Logger');
const AutheticationService = use('App/Services/AutheticationService');
const BaseController = use('App/Controllers/Http/BaseController');

// Declare Global Variables
const tag = `Middleware :: Auth`;

class Auth extends BaseController {

  async handle ({ request, response, view }, next) {
    try {
      log.debug(`${tag} :: handle`);

      const user_cookie = request.cookie("VSTKN");
      if(!user_cookie) return response.redirect('/'); // No Cookie

      await next();
    } catch(ex) {
        log.error(`${tag} :: ${ex.message}`);
        throw ex
    }
  }

}

module.exports = Auth
