module.exports = function(req) {
  const { type, id } = req.params
  const objectModel = require("../models/objectModel.js")
  const object = new objectModel({})
  if (typeof id !== "undefined") return objectModel.findByIdAndDelete(id)
}
