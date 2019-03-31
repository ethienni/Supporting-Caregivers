let mongoose = require("mongoose");

//schema
let mySchema = mongoose.Schema(
  {
    recommendedPhrases: String,
    presonalRedirection: String,
    patientID: String,
    behaviour: String,
    score: Number
  },
  {
    //collection
    collection: "analyze"
  }
);

//export
module.exports = mongoose.model("analyze", mySchema);
