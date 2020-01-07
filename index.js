const port = 4500
const express = require("express")
const bodyParser = require("body-parser")
const server = express()
server.use(bodyParser.urlencoded({ extended: true }))
const mongoose = require("mongoose")
const dbName = "mynode"

mongoose
  .connect(
    "mongodb+srv://tomer:Tomash123@cluster0-trdy7.mongodb.net/" +
      dbName +
      "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Successfully connected to the database!")
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err)
    process.exit()
  })

const objectsScehme = mongoose.Schema(
  {
    title: String,
    content: String,
    type: String
  },
  {
    timestamps: true
  }
)

app.get("/favico.ico", (req, res) => {
  res.sendStatus(404)
})

server.get("/api/:type/:id?", (req, res) => {
  require("./crud/crudGet.js")(req).then(data => res.send(data))
})

server.post("/api/:type", (req, res) => {
  require("./crud/crudCreate.js")(req).then(data => res.send(data))
})

server.put("/api/:type/:id?", (req, res) => {
  require("./crud/crudUpdate.js")(req).then(data => res.send(data))
})

server.delete("/api/:type/:id?", (req, res) => {
  require("./crud/crudDelete.js")(req).then(data => res.send(data))
})

process.on("uncaughtException", function(err) {
  // handle the error safely
  console.log(err)
})

server.listen(port, () => console.log(`Server listening on ${port}!`))
