const port = 4500
const express = require("express")
const bodyParser = require("body-parser")
const server = express()
server.use(bodyParser.urlencoded({ extended: true }))
const mongoose = require("mongoose")
const dbName = "mynode"

server.listen(port, () => console.log(`Server listening on ${port}!`))
