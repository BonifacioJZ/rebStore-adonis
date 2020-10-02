'use strict'

class Price {
    get rules() {
        return {
            price: 'required|integer',
        }
    }
    async fails(errorMessages) {
        return this.ctx.response.send(errorMessages)
    }
}

module.exports = Price
