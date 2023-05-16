'use strict'

// Declare Dependencies
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const Helpers = use('Helpers');
const moment = require('moment');

class File {
  constructor (config) {

    this.config = Object.assign({}, {
      level: 'info',
      filename: 'adonis-%DATE%.log'
    }, config)
    
    // Set Variables
    let { filename, level } = this.config
    let date = moment().format('YYYY-MM-DD')
    filename = filename.replace("%DATE%", date)

    // If filename is not absolute, save it inside the tmp path of adonis-app.
    if (!path.isAbsolute(filename)) {
      filename = Helpers.tmpPath(`logs/${filename}`)

      let dir = Helpers.tmpPath(`logs/`);
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
      }
    }

    let dest = pino.destination(filename);
    let options = {
      level,
      prettyPrint: { 
        DATE_FORMAT: 'yyyy-mm-dd HH:MM:ss',
        colorize: false,
        translateTime: 'SYS:STANDARD',
        ignore: 'pid,hostname'
      }
    }

    this.logger = pino(options, dest)

    setInterval(function() {
      let now = moment().format('YYYY-MM-DD')
      if(date != now) {
        filename = filename.replace(date, now)
        date = now;
        dest.reopen(filename)
      }
    }, 60000)
  }

  log (level, msg) {
    this.logger[`${level}`](msg)
  }
}

module.exports = File