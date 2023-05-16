'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

const Route = use('Route')
const Helpers = use('Helpers')

// Favicon

Route.get('favicon.ico', ({ response }) => response.redirect('/', false, 204))
Route.get('dist/react-router-dom.js.map', ({ response }) => response.redirect('/', false, 204))
Route.get('dist/popper.js.map', ({ response }) => response.redirect('/', false, 204))
Route.get('assets/img/icons/nav-arrow.svg', ({ response }) => response.redirect('/', false, 204))
Route.get('/Admin/css/adminlte.min.css.map', ({ response }) => response.redirect('/', false, 204))

// Dashboard Routes ###################
// Admin Auth
Route.group(() => {
    Route.on('/').render('Admin/auth/homepage')
    Route.on('/login').render('Admin/auth/login')
    Route.on('/register').render('Admin/auth/register')
    Route.on('/forgot-password').render('Admin/auth/forgot-password')
    Route.on('/forgot-password-code').render('Admin/auth/forgot-password-code')
    Route.on('/register-grower').render('Admin/auth/register-grower')
    Route.on('/register-gropper').render('Admin/auth/register-gropper')
    Route.on('/register-verify').render('Admin/auth/register-verify')
    Route.on('/terms').render('Admin/auth/terms')

    //Exceptions
    Route.on("/401").render("Site/default.edge");
    Route.on("/404").render("Site/default.edge");
    Route.on("/500").render("Site/default.edge");

//APIs be added here
    Route.post('/admin/login',          'Admin/AutheticationController.login');
    Route.post('/admin/register',       'Admin/AutheticationController.register');
    Route.post('/admin/validate',       'Admin/AutheticationController.validate');
    Route.post('/admin/forgotpassword', 'Admin/AutheticationController.forgotpassword');
    Route.post('/admin/resetpassword',  'Admin/AutheticationController.resetpassword');
});

// Admin
Route.group(() => {

    // Dashboard
    Route.on('/dashboard').render('Admin/default')

    // Play Game
    Route.on('/play-game').render('Admin/default')
    Route.on('/play-game/add').render('Admin/default')
    Route.on('/play-game/edit/:id').render('Admin/default')

    // Profile
    Route.on('/profile').render('Admin/default')
    Route.on('/profile/edit/:id').render('Admin/default')

    // Leaderboard
    Route.on('/leaderboard').render('Admin/default')
   
    // Logout
    Route.get('/admin/logout','Admin/AutheticationController.logout');

// }).middleware('Auth');
});

// Admin APIs
Route.group(() => {

// Dashboard
    // Profile
    Route.post('/profile',                 'Admin/ProfileController.profile')

    // Profile
    Route.post('/leaderboard',             'Admin/LeaderboardController.leaderboard')

}).prefix('api/v1').middleware('Auth');