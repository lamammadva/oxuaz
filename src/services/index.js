const newsServices = require("../services/news.service")
const categoryServices = require("../services/category.services")
const userServices = require("../services/user.service")
const loginService = require("./login.service")


module.exports = {
    newsServices,
    categoryServices,
    userServices,
    loginService
}