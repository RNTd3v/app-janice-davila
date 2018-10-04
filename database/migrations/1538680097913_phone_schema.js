'use strict'

const Schema = use('Schema')

class PhoneSchema extends Schema {
  up () {
    this.create('phones', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('number')
      table.integer('about_id').unsigned()
      table
        .foreign('about_id')
        .references('abouts.id')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('phones')
  }
}

module.exports = PhoneSchema
