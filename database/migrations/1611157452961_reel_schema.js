'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReelSchema extends Schema {
  up () {
    this.create('reels', (table) => {
      table.increments()
      table.timestamps()
      table.string('category').notNullable()
      table.string('category_pt').notNullable()
      table.string('vimeo_id').notNullable()
      table.integer('order_by').notNullable()
    })
  }

  down () {
    this.drop('reels')
  }
}

module.exports = ReelSchema
