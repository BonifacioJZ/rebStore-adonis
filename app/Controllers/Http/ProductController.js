'use strict'

const Product = use('App/Models/Product')
const Service = use('App/Models/Service')
class ProductController {
    async index({ request, response }) {
        const products = await Product.all()
        return response.status(200).send(products)

    }
    async store({ request, response }) {
        const { name, display_name, description, prices, service_id, importe } = request.all()
        const product = new Product()
        product.fill({
            name,
            display_name,
            importe,
            description
        });

        const service = await Service.find(service_id)
        await service.products().save(product)
        await product.prices().attach(prices)
        return response.status(200).send({
            product,
            prices: await product.prices().fetch(),
            services: await product.services().fetch()
        })

    }
    async show({ request, params, response }) {
        const { id } = params
        const product = await Product.find(id)
        return response.status(200).send({
            product,
            service: await product.services().fetch(),
            prices: await product.prices().fetch()
        })
    }
    async update({ request, params, response }) {
        const { name, display_name, description, service_id, importe, prices } = request.all()
        const { id } = params
        const product = await Product.find(id)
        product.merge({
            name,
            display_name,
            description,
            service_id,
            importe
        })
        await product.prices().sync(prices)
        await product.save()
        return response.status(200).send({
            product,
            service: await product.services().fetch(),
            prices: await product.prices().fetch()
        })

    }
    async delete({ request, response, params }) {
        const { id } = params
        const product = await Product.find(id)
        await product.prices().detach()
        await product.delete()
        return response.status(200).send({ mensaje: "Producto Eliminado" })
    }
}

module.exports = ProductController
