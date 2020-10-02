'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Service extends Model {
    products() {
        return this.hasMany('App/Models/Product')
    }
    numbers() { return this.hasMany('App/Models/Number') }
}

module.exports = Service
