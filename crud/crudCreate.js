module.exports = function(req) {
  const { title, content, type, fields } = req.body
  const objectModel = require("../models/objectModel.js")
  const object = new objectModel({
    title,
    content,
    type
  })
  return object.save()
}
