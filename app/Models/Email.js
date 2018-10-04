'use strict'

const Model = use('Model')

class Email extends Model {
    about () {
        return this.belongsTo('App/Models/About');
    }
}

module.exports = Email
