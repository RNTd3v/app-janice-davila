'use strict'

const Schema = use('Schema')

class EmailSchema extends Schema {
  up () {
    this.create('emails', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('email')
      table.integer('about_id').unsigned()
      table
        .foreign('about_id')
        .references('abouts.id')
        .onDelete('cascade')
    })
  }

  down () {
    this.drop('emails')
  }
}

module.exports = EmailSchema
