'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.post('/user/create', 'UserController.store').validator(['User'])
    Route.post('/user/login', 'UserController.login').validator(['Login'])
}).prefix('/api/v1');
Route.group(() => {
    Route.get('/user', 'UserController.show')
    Route.get('/user/:id', 'UserController.user')
    Route.get('/users', 'UserController.index')
    Route.put('/user', 'UserController.update').validator('Update')
    Route.delete('/user/:id', 'UserController.delete')
}).prefix('/api/v1/admin').middleware('auth')

Route.group(() => {
    Route.get('/', 'ServiceController.index')
    Route.get('/page/:page', 'ServiceController.index')
    Route.post('/', 'ServiceController.store').validator('Service')
    Route.get('/:id', 'ServiceController.show')
    Route.put('/:id', 'ServiceController.update').validator('Service')
    Route.delete('/:id', 'ServiceController.delete')

}).prefix('/api/v1/admin/service').middleware('auth')

Route.group(() => {
    Route.get('/', 'ServiceController.index')
}).prefix('/api/vi/admin/product').middleware('auth')
