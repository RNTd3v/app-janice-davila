'use strict'

const Model = use('Model')

class Film extends Model {
    videos() {
        return this.hasMany('App/Models/Video');
    }
    category () {
        return this.belongsTo('App/Models/Category');
    }
}

module.exports = Film
