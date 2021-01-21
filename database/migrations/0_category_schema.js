'use strict'

const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.createIfNotExists('categories', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('name_pt').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
