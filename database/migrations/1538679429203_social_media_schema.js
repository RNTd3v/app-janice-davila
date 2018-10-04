'use strict'

const Schema = use('Schema')

class SocialMediaSchema extends Schema {
  up () {
    this.create('social_medias', (table) => {
      table.increments()
      table.timestamps()
      table.string('name').notNullable()
      table.string('url').notNullable()
      table.string('icon').notNullable()
      table.integer('about_id').unsigned()
      table
        .foreign('about_id')
        .references('abouts.id')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('social_medias')
  }
}

module.exports = SocialMediaSchema
