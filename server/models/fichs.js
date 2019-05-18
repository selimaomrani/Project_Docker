const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const fichsSchema = new Schema({
  nom: { type: String, required: true },
  details: [
    {
      question: { type: String },

      answer: { type: String }
    }
  ]
});

module.exports = mongoose.model("Fich", fichsSchema);
