'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Price extends Model {
    products() { return this.belongsToMany('App/Models/Product') }
}


module.exports = Price
