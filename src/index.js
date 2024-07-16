const express = require("express")
const cors = require("cors")
const dbConnection = require("./config/database")
const app = express()
app.use(express.json());

const newsRouter = require("./routes/news")
const categoryRouter = require("./routes/category")

const config = require("./config")

app.use(cors())

app.use("/news",newsRouter)
app.use("/category",categoryRouter)
dbConnection()





app.listen(config.PORT,()=>{
    console.log(`Server is running ${config.PORT}`);
})