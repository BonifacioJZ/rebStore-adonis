'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NumberSchema extends Schema {
    up() {
        this.create('numbers', (table) => {
            table.increments()
            table.string('number', 15).notNullable()
            table.integer('service_id').unsigned().references('id').inTable('services')
            table.integer('client_id').unsigned().references('id').inTable('clients')
            table.timestamps()
        })
    }

    down() {
        this.drop('numbers')
    }
}

module.exports = NumberSchema
