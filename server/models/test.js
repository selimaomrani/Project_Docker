const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const testSchema = new Schema({
  question: { type: String },
  choices: [{ choice: String }],
  answer: { type: String }
});

module.exports = mongoose.model("test", testSchema);
