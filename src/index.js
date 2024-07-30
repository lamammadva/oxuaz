const express = require("express")
const cors = require("cors")
const dbConnection = require("./config/database")
const router = require("./routes/index")
const config = require("./config")
const { errorMiddleware } = require("./middleware/error.middleware")
const app = express()
app.use(express.json());


app.use(router)
app.use(cors())


dbConnection()


app.use(errorMiddleware)


app.listen(config.port,()=>{
    console.log(`Server is running ${config.port}`);
})