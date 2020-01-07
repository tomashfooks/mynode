module.exports = function(req) {
  const { title, content, type, fields } = req.body
  const objectModel = require("../models/objectModel.js")
  console.log(req.body)
  return objectModel.findByIdAndUpdate(req.params.id, req.body)
}
