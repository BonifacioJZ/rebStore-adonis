'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
    up() {
        this.create('products', (table) => {
            table.increments()
            table.integer('service_id').unsigned().references('id').inTable('services')
            table.string('name', 200).notNullable()
            table.string('display_name', 50).notNullable()
            table.string('description')
            table.decimal('price').notNullable()
            table.decimal('importe').notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('products')
    }
}

module.exports = ProductSchema
