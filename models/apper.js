const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apperSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  githublink: String,
  deploylink: String,
  image: String,
  date: { type: Date, default: Date.now }
});

const Apper = mongoose.model("Apper", apperSchema);

module.exports = Apper;
