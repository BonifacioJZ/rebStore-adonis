'use strict'

class Login {
    get rules() {
        return {
            email: 'required|email',
            password: 'required'
        }
    }
    async fails(errorMessages) {
        return this.ctx.response.send(errorMessages)
    }
}

module.exports = Login