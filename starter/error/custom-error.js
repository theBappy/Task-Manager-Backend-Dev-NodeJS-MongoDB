

class CustomAPIError extends Error{
    constructor(message,statuscode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustemError = (msg, statusCode) => {
    return new CustomAPIError(msg,statusCode)
}

module.exports = { createCustemError, CustomAPIError }