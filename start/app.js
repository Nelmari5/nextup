'use strict'
const path = require('path');

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/shield/providers/ShieldProvider',
  '@adonisjs/session/providers/SessionProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  '@adonisjs/lucid-slugify/providers/SlugifyProvider',
  'adonis-scheduler/providers/SchedulerProvider',
  path.join(__dirname, '..', 'providers', 'Logger/Provider'),
  path.join(__dirname, '..', 'providers', 'ProfileAPI/Provider'),
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  'adonis-scheduler/providers/CommandsProvider'
]

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
*/
const aliases = {
  Scheduler: 'Adonis/Addons/Scheduler'
}

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
*/
const commands = [
  'App/Commands/'
]

module.exports = { providers, aceProviders, aliases, commands }
