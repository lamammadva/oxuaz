const mongoose = require("mongoose")
const config = require("./index")

const dbConnection = async () => {
    try {
        await mongoose.connect(config.database)
        console.log("db  connection is successfully");
    } catch (error) {
        console.log("db connection is not succesfully ");

    }
}
module.exports = dbConnection