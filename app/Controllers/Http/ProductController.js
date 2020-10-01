'use strict'

const Product = use('App/Models/Product')
const Service = use('App/Models/Service')
class ProductController {
    async index({ request, response }) {
        const products = await Product.all()
        return response.status(200).send(products)

    }
    async store({ request, response }) {
        const { name, display_name, description, price, service_id, importe } = request.all()
        const product = new Product()
        product.fill({
            name,
            display_name,
            importe,
            price,
            description
        });
        const service = await Service.find(service_id)
        await service.products().save(product)
        return response.status(200).send(product)

    }
}

module.exports = ProductController
