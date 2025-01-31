require("dotenv/config")

module.exports = {
    port : process.env.PORT,
    database:process.env.DB_URL,
    jwtSecret: process.env.JWT_SECRET || 'defaultSecretKey'
}