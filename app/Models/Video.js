'use strict'

const Model = use('Model')

class Video extends Model {
    film () {
        return this.belongsTo('App/Models/Film');
    }
}

module.exports = Video
