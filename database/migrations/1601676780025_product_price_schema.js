'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductPriceSchema extends Schema {
    up() {
        this.create('price_product', (table) => {
            table.increments()
            table.integer('product_id').unsigned().references('id').inTable('products')
            table.integer('price_id').unsigned().references('id').inTable('prices')
            table.timestamps()
        })
    }

    down() {
        this.drop('product_price')
    }
}

module.exports = ProductPriceSchema
