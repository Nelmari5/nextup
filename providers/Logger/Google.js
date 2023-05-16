'use strict'

const pino = require('pino')

class Google {
  constructor () {

    let options = {
      level,
      prettyPrint: { 
        DATE_FORMAT: 'yyyy-mm-dd HH:MM:ss',
        colorize: true,
        translateTime: 'SYS:STANDARD',
        ignore: 'pid,hostname'
      }
    }

    this.logger = pino(options)
  }

  log (level, msg) {
    this.logger[`${level}`](msg)
  }
}

module.exports = Google
