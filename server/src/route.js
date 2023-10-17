const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {

  // get all user
    app.get('/users', isAuthenController, UserController.index),

    app.post('/user', UserController.create),

    app.put('/user/:userId', UserController.put),

    app.delete('/user/:userId', UserController.delete),

    app.get('/user/:userId', UserController.show),

    //login
    app.post('/login', UserAuthenController.login)

}