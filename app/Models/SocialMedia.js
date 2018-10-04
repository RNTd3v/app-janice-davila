'use strict'

const Model = use('Model')

class SocialMedia extends Model {
    about () {
        return this.belongsTo('App/Models/About');
    }
}

module.exports = SocialMedia
