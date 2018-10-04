'use strict'

const Schema = use('Schema')

class AboutSchema extends Schema {
  up () {
    this.create('abouts', (table) => {
      table.increments()
      table.timestamps()
      table.string('name').notNullable()
      table.string('profession').notNullable()
      table.string('avatar').notNullable()
    })
  }

  down () {
    this.drop('abouts')
  }
}

module.exports = AboutSchema
