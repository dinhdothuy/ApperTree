const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define apperSchema
const apperSchema = new Schema({
  // _creator : { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  githublink: String,
  deploylink: String,
  pic: String,
  date: { type: Date, default: Date.now } 
});

const Apper = mongoose.model("Apper", apperSchema);

module.exports = Apper;
