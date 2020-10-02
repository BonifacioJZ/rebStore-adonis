'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
    up() {
        this.create('clients', (table) => {
            table.increments()
            table.string('first_name', 100).notNullable()
            table.string('last_name', 100)
            table.string('place', 100)
            table.timestamps()
        })
    }

    down() {
        this.drop('clients')
    }
}

module.exports = ClientSchema
