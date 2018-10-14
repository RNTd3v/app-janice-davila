'use strict'

const User = use('App/Models/User');

class UserController {

    async index() {
        const users = await User.all();
        return users;
    }

    async register({ request }) {
        const data = request.only(['username', 'email', 'password']);
        const user = await User.create(data);
        return user;
    }

    async authenticate({ request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        const user = token ? await User.findBy('email', email) : null;
        return { token, idUser: user.id, username: user.username };
    }
}

module.exports = UserController
