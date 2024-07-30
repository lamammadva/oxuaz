const AppError = require("./app.error");

class ValidationErrors extends AppError{
    constructor(message){
        super(message,401)
    }
}

module.exports = ValidationErrors