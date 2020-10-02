'use strict'

const Service = use('App/Models/Service')
class ServiceController {
    async index({ response, params }) {
        let { page } = params
        if (!page) {
            page = 1
        }
        const services = await Service.query().paginate(page)
        return response.status(200).send(services)
    }
    async store({ request, response }) {
        const { name, display_name, description } = request.all()
        const service = await Service.create({
            name,
            display_name,
            description
        })
        return response.status(200).send(service)
    }
    async show({ response, params }) {
        const { id } = params;
        const service = await Service.find(id);
        return response.status(200).send({
            service,
            products: await service.products().fetch()
        })
    }
    async update({ response, request, params }) {
        const { id } = params;
        const { name, display_name, description } = request.all()
        const service = await Service.find(id)
        service.merge({
            name,
            display_name,
            description
        })
        await service.save();
        return response.status(200).send(service)
    }
    async delete({ response, params }) {
        const { id } = params
        const service = await Service.find(id)
        await service.delete()
        return response.status(200).send({ mensaje: 'Se elimino con exito' })
    }
}

module.exports = ServiceController
