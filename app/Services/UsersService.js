'use strict';

// Declare Dependencies
const log = use('Logger');
const Database = use('Database');
const User = use('App/Models/User');

//Declare Variables
const tag = `UsersService`

// Init Class
class UsersService {

    //Dashboard

    async list({ limit, order, page, role_id, email, emsisdn, username, status }){
        try {
            log.debug(`${tag} :: list :: page ${page} :: limit ${limit}`);

            let query = Database
            .select('ur.role as role')
            .select(Database.raw('DATE_FORMAT(u.created_at, "%Y-%m-%d") as creation_date'))
            .select(Database.raw('DATE_FORMAT(u.updated_at, "%Y-%m-%d") as update_date'))
            .from('users as u')
            .innerJoin('user_roles as ur', 'ur.id', 'u.role_id')
            .where('u.role_id', role_id)

            if (role_id && role_id != 1){
                query
                .select('u.id')
                .select('u.emsisdn')
                .select('u.is_active')
            }
            if (role_id && role_id != 2){
                query
                .select('u.id')
                .select('u.email')
                .select('u.is_active')
            }
            
            if (status && status != -1) query.where('u.is_active', status)
            if (email && email != '') query.where('u.email','like', `%${email}%`)
            if (username && username != '') query.where('u.name','like', `%${username}%`)
            if (emsisdn && emsisdn != '') query.where('u.emsisdn','like', `%${emsisdn}%`)

            let users = await query
            .orderBy('u.id', order)
            .paginate(page, limit)

            return users;
        } catch (ex) {
            log.error(`${tag} :: list :: ${ex.message}`);
            throw ex;
        }
    }

    async getUser({id}){
        try {
            log.debug(`${tag} :: getUser :: ${id}`);

            let user = await Database
            .select('u.*')
            .select('ur.role as role')
            .select(Database.raw('DATE_FORMAT(u.created_at, "%Y-%m-%d") as creation_date'))
            .select(Database.raw('DATE_FORMAT(u.updated_at, "%Y-%m-%d") as update_date'))
            .from('users as u')
            .innerJoin('user_roles as ur', 'ur.id', 'u.role_id')
            .where(`u.id`, id)
            .first()

            return user;
        } catch (ex) {
            log.error(`${tag} :: getUser :: ${id} :: ${ex.message}`);
            throw ex;
        }
    }

    async update({user_id, id, role_id, name, surname, email, password }) {
        const trx = await Database.beginTransaction();
        try {
            log.debug(`${tag} :: update :: ${id}`);
            
            let user = await User.find(id);
            user.role_id = role_id;
            user.name = name;
            user.surname = surname;
            user.email = email;
            if(password.trim() != "") user.password = password;
            await user.save(trx);

            trx.commit();
            return user;
        } catch(ex) {
            log.error(`${tag} :: update :: ${id} :: ${ex.message}`);
            trx.rollback();
            throw(ex);
        };

    }

}

module.exports = new UsersService;
