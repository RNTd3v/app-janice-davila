'use strict'

const Schema = use('Schema')

class FilmSchema extends Schema {
  up () {
    this.create('films', (table) => {
      table.increments()
      table.timestamps()
      table.string('title').notNullable()
      table.string('title_pt').notNullable()
      table.text('description').notNullable()
      table.text('description_pt').notNullable()
      table.string('picture').notNullable()
      table.boolean('is_active').defaultTo(true)
      table.integer('category_id').unsigned()
      table
        .foreign('category_id')
        .references('categories.id')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('films')
  }
}

module.exports = FilmSchema
