'use strict'

class Service {
    get rules() {
        return {
            name: 'required|max:100',
            display_name: 'required|max:23',
        }
    }
    async fails(errorMessages) {
        return this.ctx.response.send(errorMessages)
    }
}

module.exports = Service
