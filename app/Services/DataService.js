'use strict';

// Declare Dependencies
const Hash = use('Hash');
const log = use('Logger');
const User = use('App/Models/User');

//Declare Variables
const tag = `AutheticationService`

// Init Class
class AutheticationService {
    
    async login({email, password}) {
        try {
            log.debug(`${tag} :: login`);

            // Find User
            let user = await User.query().where('email', email).where('is_active', true).first();
            if(!user) throw { code: 401, message: `Invalid Credentials`}
            
            // Verify Password
            const isSame = await Hash.verify(password, user.password);
            if(!isSame) throw { code: 401, message: `Invalid Credentials`}

            return user;
        } catch(ex) {
            log.error(`${tag} :: login :: ${ex.message}`);
            throw(ex);
        }
    }

    async validate({user_id}) {
        try {
            log.debug(`${tag} :: validate :: ${user_id}`);

            let cacheKey = `user_${user_id}`;
            if(!!cache) return JSON.parse(cache)

            let user = await User.query().where('id', user_id).where('is_active', true).first();
            if(!user) throw { code: 401, message: `Invalid Credentials`}

            return user;
        } catch(ex) {
            log.error(`${tag} :: validate :: ${ex.message}`);
            throw(ex);
        }
    }
   
}

module.exports = new AutheticationService;
