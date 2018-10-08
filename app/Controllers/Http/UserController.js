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
        console.log(email, password);
        const token = await auth.attempt(email, password);
        return token;
    }
}

module.exports = UserController
