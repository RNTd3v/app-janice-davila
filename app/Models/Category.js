'use strict'

const Model = use('Model')

class Category extends Model {
    films () {
        return this.hasMany('App/Models/Film');
    }
}

module.exports = Category
