'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PriceSchema extends Schema {
    up() {
        this.create('prices', (table) => {
            table.increments()
            table.decimal('price').notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('prices')
    }
}

module.exports = PriceSchema
