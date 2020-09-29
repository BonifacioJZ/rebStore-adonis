'use strict'

class User {
    get rules() {
        return {
            email: 'required|email|unique:users,email',
            password: 'required',
            first_name: 'required|max:100',
            last_name: 'max:100'
        }
    }
    async fails(errorMessages) {
        return this.ctx.response.send(errorMessages)
    }
}

module.exports = User