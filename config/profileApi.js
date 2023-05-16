'use strict'

const Env = use('Env')

module.exports = {
  url: Env.get('PROFILE_API_URL'),
  username: Env.get('PROFILE_API_USERNAME'),
  password: Env.get('PROFILE_API_PASSWORD')
}