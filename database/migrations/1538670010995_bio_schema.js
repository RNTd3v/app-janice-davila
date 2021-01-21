'use strict'

const Schema = use('Schema')

class BioSchema extends Schema {
  up () {
    this.createIfNotExists('bios', (table) => {
      table.increments()
      table.timestamps()
      table.string('title').notNullable()
      table.string('title_pt').notNullable()
      table.text('description').notNullable()
      table.text('description_pt').notNullable()
    })
  }

  down () {
    this.drop('bios')
  }
}

module.exports = BioSchema
