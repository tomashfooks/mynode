const mongoose = require("mongoose")
const objectSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    type: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Object", objectSchema)
