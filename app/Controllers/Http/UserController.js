'use strict'


const User = use('App/Models/User')
class UserController {

    async index({ request, response }) {
        const users = await User.all()
        return response.status(200).send(users)
    }
    async store({ request, response }) {
        const { first_name, last_name, email, password } = request.all()
        const user = await User.create({
            first_name,
            last_name,
            email,
            password
        });
        return response.status(200).send(user)

    }
    async login({ request, response, auth }) {
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        response.status(200).send(token)
    }
    async show({ response, auth }) {
        const user = await auth.getUser()
        return response.status(200).send(user)

    }
    async user({ params, response }) {
        const { id } = params;
        const user = await User.find(id)
        return response.status(200).send(user)
    }
    async update({ request, response, auth }) {
        const { first_name, last_name } = request.all()
        const user = await auth.getUser()
        user.merge({
            first_name,
            last_name,
        })

        await user.save()
        return response.status(200).send(user)
    }
    async delete({ params, response }) {
        const { id } = params
        const user = await User.find(id)
        await user.delete()
        return response.status(200).send({ menjase: "Usuario eliminado" })
    }


}

module.exports = UserController