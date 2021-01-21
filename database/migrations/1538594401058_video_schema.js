'use strict'

const Schema = use('Schema')

class VideoSchema extends Schema {
  up () {
    this.createIfNotExists('videos', (table) => {
      table.increments()
      table.timestamps()
      table.string('url').notNullable()
      table.string('title').notNullable()
      table.string('title_pt').notNullable()
      table.integer('film_id').unsigned()
      table
        .foreign('film_id')
        .references('films.id')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('videos')
  }
}

module.exports = VideoSchema
