'use strict';

//Declare Dependencies
const log = use('Logger');
const BaseController = use('App/Controllers/Http/BaseController');
const AuthenticationService = use('App/Services/AuthenticationService');
const axios = require('axios')

//Declare Variables
const tag = `Admin :: AutheticationController`

class AutheticationController extends BaseController {

    async login({ request, response, session }) {
        // try {
        //     console.log('NELLLLAAAAAA :: YOUR IN :: LOGIN');
        //     log.debug(`${tag} :: Login`);
        //     const data = request.post()
        //     console.log('NELLLLAAAAAA :: Rules start ------> ', data);

        //     let config = {
        //         headers: {

        //         }
        //     }

        //     await axios.post('/admin/login',
        //         data,
        //         config
        //     )
        //         .then(async (data) => {
        //             console.log('data :: ', data);
        //             return response.route('/forgot-password-code');

        //         }).catch(error => {
        //             console.log('Error', error);
        //             console.log('Error ::', error.response.data.errors);
        //             session.flash({ error: error.response.data.errors });

        //             return response.redirect("back");
        //         });
        // } catch (ex) {
        //     log.error(`${tag} :: Login :: ${ex.message}`);
        //     return this.handleException(response, session, ex);
        // }
        try {
            log.debug(`${tag} :: login`);

            // Validate
            const rules = {
                email: 'required',
                password: 'required'
            };
            let { email, password } = await this.validate(request, rules);

            let { id, name } = await AutheticationService.login({ email, password });

            let user_cookie = JSON.stringify({ user_id: id, name })
            response.cookie('VSTKN', user_cookie, {
                httpOnly: true,
                sameSite: true,
                path: '/',
            });

            return response.route('/bulk-campaigns');
        } catch (ex) {
            log.error(`${tag} :: login :: ${JSON.stringify(ex.message)}`);
            throw ex
        }
    }

    async register({ request, response, session }) {
        try {
            log.info(`${tag} :: register`);
            const data = request.post()
            console.log('data :: ', data);

            log.info(`${tag} :: register`, data);

            let config = {
                headers: {

                }
            }

            await axios.post('',
                data,
                config
            )
                .then(async (data) => {
                    console.log('data :: ', data);
                    return response.route('/register-verify');

                }).catch(error => {
                    console.log('Error', error);
                    console.log('Error ::', error.response.data.errors);
                    session.flash({ error: error.response.data.errors });

                    return response.redirect("back");
                });
        } catch (ex) {
            log.error(`${tag} :: register :: ${ex.message}`);
            return this.handleException(response, session, ex);
        }
    }

    // async validate({ request, response, session }) {
    //     try {
    //         log.info(`${tag} :: register`);
    //         const data = request.post()
    //         console.log('data :: ', data);

    //         log.info(`${tag} :: register`, data);

    //         let config = {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "x-api-key": "21fabf2223472e87f6b8661064bd32ead7740b4d5e6a8f6759441a2e52ebe73b0e72b8acc7343bfc6803e8b71c34a018"
    //             }
    //         }

    //         await axios.post('/admin/validate',
    //             data,
    //             config
    //         )
    //             .then(async (data) => {
    //                 console.log('data :: ', data);
    //                 return response.route('/login');

    //             }).catch(error => {
    //                 console.log('Error', error);
    //                 console.log('Error ::', error.response.data.errors);
    //                 session.flash({ error: error.response.data.errors });

    //                 return response.route('/register-verify');
    //             });
    //     } catch (ex) {
    //         log.error(`${tag} :: register :: ${ex.message}`);
    //         return this.handleException(response, session, ex);
    //     }
    // }

    // async forgotpassword({ request, response, session }) {
    //     try {
    //         log.info(`${tag} :: register`);
    //         const data = request.post()
    //         console.log('data :: ', data);

    //         log.info(`${tag} :: register`, data);

    //         let config = {
    //             headers: {

    //             }
    //         }

    //         await axios.post('',
    //             data,
    //             config
    //         )
    //             .then(async (data) => {
    //                 console.log('data :: ', data);
    //                 return response.route('/forgot-password-code');

    //             }).catch(error => {
    //                 console.log('Error', error);
    //                 console.log('Error ::', error.response.data.errors);
    //                 session.flash({ error: error.response.data.errors });

    //                 return response.redirect("back");
    //             });
    //     } catch (ex) {
    //         log.error(`${tag} :: register :: ${ex.message}`);
    //         return this.handleException(response, session, ex);
    //     }
    // }

    // async resetpassword({ request, response, session }) {
    //     try {
    //         log.info(`${tag} :: register`);
    //         const data = request.post()
    //         console.log('data :: ', data);

    //         log.info(`${tag} :: register`, data);

    //         let config = {
    //             headers: {

    //             }
    //         }

    //         await axios.post('',
    //             data,
    //             config
    //         )
    //             .then(async (data) => {
    //                 console.log('data :: ', data);
    //                 return response.route('/login');

    //             }).catch(error => {
    //                 console.log('Error', error);
    //                 console.log('Error ::', error.response.data.errors);
    //                 session.flash({ error: error.response.data.errors });

    //                 return response.redirect("back");
    //             });
    //     } catch (ex) {
    //         log.error(`${tag} :: register :: ${ex.message}`);
    //         return this.handleException(response, session, ex);
    //     }
    // }

    async logout({ response }) {
        try {
            log.debug(`${tag} :: Logout`);

            await response.clearCookie('VSTKN')
            return response.redirect('/');
        } catch (ex) {
            log.error(`${tag} :: Logout :: ${ex.message}`);
            throw ex
        }
    }
}

module.exports = AutheticationController