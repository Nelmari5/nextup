'use strict'

const pino = require('pino')

class Console {
  constructor () {
    this.logger = pino({
      level: 'trace',
      prettyPrint: { 
        DATE_FORMAT: 'yyyy-mm-dd HH:MM:ss',
        colorize: true ,
        translateTime: 'SYS:STANDARD',
        ignore: 'pid,hostname'
      }
    })
  }

  log (level, msg) {
    this.logger[`${level}`](msg)
  }
}

module.exports = Console
