'use strict'

class Product {
    get rules() {
        return {
            service_id: `required`,
            name: `required|string|max:200`,
            display_name: `required|string|max:50`,
            importe: `required|integer`
        }
    }
    async fails(errorMessages) {
        return this.ctx.response.send(errorMessages)
    }
}

module.exports = Product
