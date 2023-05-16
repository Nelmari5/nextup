const { ServiceProvider } = require('@adonisjs/fold')

class ProfileAPI extends ServiceProvider {
  register () {
    this.app.singleton('ProfileAPI', () => {
      const Config = this.app.use('Adonis/Src/Config');
      const ProfileAPI = require('./Index');
      return new ProfileAPI(Config)
    })
  }

}

module.exports = ProfileAPI
