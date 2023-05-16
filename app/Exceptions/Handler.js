'use strict'

//Declare Dependencies
const log = use('Logger');

class ExceptionHandler {

  async handle (error, { response }) {
    log.error(`ExceptionHandler :: handle :: ${error.message} `);

    return response.status(error.status).send(error.message);
  }

}

module.exports = ExceptionHandler
