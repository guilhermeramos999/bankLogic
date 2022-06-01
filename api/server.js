const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const config = require('dotenv').config()

app.use(bodyParser.json())

app.listen(process.env.API_PORT, () => console.log("API online on port: "+ process.env.API_PORT))