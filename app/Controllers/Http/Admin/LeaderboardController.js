'use strict'

// Declare Dependencies
const log = use('Logger');
const BaseController = use('App/Controllers/Http/BaseController');
const LeaderboardServices = use('App/Services/LeaderboardServices');

//Declare Global Variables
const tag = `LeaderboardController`

class LeaderboardController extends BaseController {

    async leaderboard({ request, response }) {
        try {
            log.debug(`${tag} :: leaderboard list`);

            // Validate
            const rules = {};
            let { limit = 10, page = 1, order = 'DESC', id = 0 } = await this.validate(request, rules);

            //Bussiness Logic
            let leaderboard = await LeaderboardServices.leaderboardList({ order, limit, page, id })

            // Returning Data
            let data = {
                code: 200,
                message: {
                    leaderboard
                }
            };

            return this.respond(response, data);
        } catch (ex) {
            log.error(`${tag} :: leaderboard list :: ${ex.message}`);
            throw ex
        }
    }

}
module.exports = LeaderboardController
