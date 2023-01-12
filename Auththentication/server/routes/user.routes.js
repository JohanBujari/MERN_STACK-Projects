const UserController = require('../controller/user.controller');


module.exports = app => {
    app.post('/api/user-signup', UserController.signUp);
    app.post('/api/user-login', UserController.logIn);
    app.get('/api/user', UserController.verifyToken, UserController.getUser);
}