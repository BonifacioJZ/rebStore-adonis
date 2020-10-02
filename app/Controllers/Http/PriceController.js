'use strict'
const Price = use('App/Models/Price')
class PriceController {

    async index({ response }) {
        const price = await Price.all()
        return response.status(200).send(price)
    }
    async store({ request, response }) {
        const { price } = request.all()
        const newPrice = await Price.create({
            price,
        })
        return response.status(200).send({
            newPrice,
        })

    }
    async show({ request, response, params }) {
        const { id } = params
        const price = await Price.find(id)
        return response.status(200).send({
            price,
            products: await price.products().fetch()
        })

    }
    async update({ request, response, params }) {
        const { id } = params
        const { price } = request.all()
        const cPrice = await Price.find(id)
        cPrice.merge({
            price,
        })
        await cPrice.save()
        return response.status(200).send(cPrice)
    }
    async delete({ request, response, params }) {
        const { id } = params
        const price = await Price.find(id)
        await price.products().detach()
        await price.delete()
        return response.status(200).send({ mensaje: "eliminado con exito" })
    }

}

module.exports = PriceController
