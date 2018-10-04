'use strict'

const Model = use('Model')

class Phone extends Model {
    about () {
        return this.belongsTo('App/Models/About');
    }
}

module.exports = Phone
