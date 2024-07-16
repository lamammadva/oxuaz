const express = require("express")
const cors = require("cors")
const app = express()
require('dotenv/config')

const config = require("./config")


app.use(cors)

app.listen(config.PORT,()=>{
    console.log(`Server is running ${config.PORT}`);
})