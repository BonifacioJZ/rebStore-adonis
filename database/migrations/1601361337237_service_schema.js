'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceSchema extends Schema {
    up() {
        this.create('services', (table) => {
            table.increments()
            table.string('name', 100).notNullable()
            table.string('display_name', 23).notNullable()
            table.string('description')
            table.timestamps()
        })
    }

    down() {
        this.drop('services')
    }
}

module.exports = ServiceSchema