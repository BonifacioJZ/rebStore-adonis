'use strict'

class Update {
    get rules() {
        return {
            first_name: 'required|max:100',
            last_name: 'max:100'
        }

    }
    async fails(errorMessages) {
        return this.ctx.response.send(errorMessages)
    }
}

module.exports = Update