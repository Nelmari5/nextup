'use strict';

//Declare Dependencies
const log = use('Logger');
const Database = use('Database');
const AutheticationService = use('App/Services/AutheticationService');
const BaseController = use('App/Controllers/Http/BaseController');

// Declare Global Variables
const tag = `Middleware :: Identify`;

class Identify extends BaseController {

  async handle ({ request, response, view }, next) {
    try {
      log.trace(`${tag} :: handle`);

      // Check Cookie
      const cookie = request.cookie('NUTKN');
      if(!!cookie) return await this.hasCookie({ request, view, next, cookie})
      if(!cookie) return await this.hasNoCookie({request, response, next})

    } catch(ex) {
        log.error(`${tag} :: ${ex.message}`);
        throw ex
    }
  }

  async hasCookie({request, view, next, cookie}){
    try {
      log.trace(`${tag} :: hasCookie`);
      let service_key = "NUTKN";
      let user = await AutheticationService.validate();
      
      view.share({
        profile: JSON.stringify(user)
      })
      user.service_key = service_key
      request.user = user;
  
      return await next();
    } catch(ex) {
        log.error(`${tag} :: hasCookie :: ${ex.message}`);
        throw ex
    }
  }
  
  async hasNoCookie({request, response, next}){
    try {
      log.trace(`${tag} :: hasNoCookie`);

      let redirect_url = `/`
      return await response.redirect(redirect_url);

    } catch(ex) {
        log.error(`${tag} :: hasNoCookie :: ${ex.message}`);
        throw ex
    }
  }

}

module.exports = Identify
