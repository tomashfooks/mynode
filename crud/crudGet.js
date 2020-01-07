module.exports = function(req) {
  const { type, id } = req.params
  const objectModel = require("../models/objectModel.js")
  console.log(req.body)

  const object = new objectModel({})
  if (typeof id !== "undefined") {
    return objectModel.findById(id)
  } else {
    delete req.params.id
    return objectModel.find(req.body)
  }
}
