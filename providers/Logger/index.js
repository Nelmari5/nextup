'use strict'

// Declare Dependencies
const Config = use('Config');
const File = require('./File');
const Console = require('./Console');

// Init Class
class Logger {
  constructor () {

    const {logger} = Config.get('app');
    if (!logger) throw new Error(`Specify Logger Settings under config/app file`);
    
    let { transport, file } = logger
    if(transport == "console"){
      this.driver = new Console()
    }

    if(transport == "file"){
      this.driver = new File(file)
    }

  }

  log (level, message) {
    this.driver.log(level, message)
  }

  trace (message) {
    this.log('trace', message)
  }
  debug (message) {
    this.log('debug', message)
  }
  info (message) {
    this.log('info', message)
  }
  warn (message) {
    this.log('warn', message)
  }
  error (message) {
    this.log('error', message)
  }
  fatal (message) {
    this.log('fatal', message)
  }

}

module.exports = Logger
