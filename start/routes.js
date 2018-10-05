'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {import('@adonisjs/framework/src/Route/Manager'} */
const Route = use('Route')


Route.group(() => {
  // User routes
  Route.get('/users', 'UserController.index').middleware(['auth']);
  Route.post('/register', 'UserController.register');
  Route.post('/authenticate', 'UserController.authenticate');

  // Category routes
  Route.get('/category', 'CategoryController.index');
  Route.get('/category/:id', 'CategoryController.show');
  Route.get('/category/films', 'CategoryController.allWithFilms');
  Route.get('/category/films/videos', 'CategoryController.allWithFilmsAndVideos');
  Route.get('/category/:id/films', 'CategoryController.allFilmsByCategoryId');

  // Films routes
  Route.resource('films', 'FilmController').apiOnly().middleware(['auth']);
  Route.get('film/:id', 'FilmController.show');
  Route.resource('videos', 'VideoController').apiOnly().middleware(['auth']);

  // Contact routes
  Route.resource('contact', 'ContactController');

  // Bio routes
  Route.resource('bio', 'BioController').apiOnly().middleware(['auth']);
  Route.get('/bio/:id', 'BioController.show');

  // About routes
  Route.resource('abouts', 'AboutController').apiOnly().middleware(['auth']);
  Route.resource('phones', 'PhoneController').apiOnly().middleware(['auth']);
  Route.resource('emails', 'EmailController').apiOnly().middleware(['auth']);
  Route.resource('social-medias', 'SocialMediaController').apiOnly().middleware(['auth']);
  Route.get('/about', 'AboutController.index');

  // Upload route
  Route.post('upload', 'UploadController.index');
})
.prefix('api/v1');

// https://www.npmjs.com/package/adonis-nextjs

