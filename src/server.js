const express = require("express")
const nunjucks = require("nunjucks");
const meal_router = require("./routers/meal_router")
const sales_router = require("./routers/sales_router")

const app = express()
nunjucks.configure(['src/views/'], { express: app, autoescape: true })

app.use(express.static(__dirname + '/public'))

app.use('/', meal_router)

app.use('/sales/', sales_router)

const port = process.env.PORT || 8000

app.listen(port, console.log(`listening on: http://0.0.0.0:${port}`))