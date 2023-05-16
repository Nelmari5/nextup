'use strict';


// Declare Dependencies
const log = use('Logger');
const Database = use('Database');

//Declare global variables
const tag = `ProfileServices`

// Init Class
class ProfileServices {

    async profileList({ limit, page, }) {
        try {
            log.debug(`${tag} :: profileList`);

            let query = Database
            .select('ur.*')
            .select(Database.raw('DATE_FORMAT(ur.created_at, "%Y-%m-%d") as created_at'))
            .select(Database.raw('DATE_FORMAT(ur.updated_at, "%Y-%m-%d") as updated_at'))
            .from('users as ur')

            return query || {};
        } catch (error) {
            log.error(`${tag} :: profileList ${error.message}`);
            throw error
        }
    }

}

module.exports = new ProfileServices;
