'use strict';


// Declare Dependencies
const log = use('Logger');
const Database = use('Database');

//Declare global variables
const tag = `LeaderboardServices`

// Init Class
class LeaderboardServices {

    async leaderboardList({ limit, page, }) {
        try {
            log.debug(`${tag} :: leaderboardList`);

            let query = Database
            .select('lb.*')
            .select(Database.raw('DATE_FORMAT(lb.created_at, "%Y-%m-%d") as created_at'))
            .select(Database.raw('DATE_FORMAT(lb.updated_at, "%Y-%m-%d") as updated_at'))
            .from('leaderboard as lb')

            return query || {};
        } catch (error) {
            log.error(`${tag} :: leaderboardList ${error.message}`);
            throw error
        }
    }

}

module.exports = new LeaderboardServices;
