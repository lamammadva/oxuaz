const express = require("express")
const cors = require("cors")
const dbConnection = require("./config/database")
const router = require("./routes/index")
const config = require("./config")
const app = express()
app.use(express.json());


app.use(router)
app.use(cors())


dbConnection()





app.listen(config.PORT,()=>{
    console.log(`Server is running ${config.PORT}`);
})