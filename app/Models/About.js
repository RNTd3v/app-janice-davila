'use strict'

const Model = use('Model')

class About extends Model {
    email() {
        return this.hasMany('App/Models/Email');
    }
    phone() {
        return this.hasMany('App/Models/Phone');
    }
    social_media() {
        return this.hasMany('App/Models/SocialMedia');
    }
}

module.exports = About
