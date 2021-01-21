'use strict'

const Schema = use('Schema')

class ContactSchema extends Schema {
  up () {
    this.createIfNotExists('contacts', (table) => {
      table.increments()
      table.timestamps()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('phone').notNullable()
      table.string('subject')
      table.text('message').notNullable()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
