'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class Logger extends ServiceProvider {
  register() {
    this.app.singleton('MyLogger', (app) => {
      const MyLogger = require('./index')
      return new MyLogger()
    })

    this.app.alias('MyLogger', 'Logger')
  }
}

module.exports = Logger