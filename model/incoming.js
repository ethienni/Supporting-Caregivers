let mongoose = require("mongoose");

//schema
let mySchema = mongoose.Schema(
  {
    patient: String,
    caregiver: String,
    typeOfCare: String,
    typeOfAbuse: String,
    isAgressive: String,
    recommendedPhrases: String,

    personalRedirection: String,
    successRating: Number,
    dateTime: String,
    Comments: String
  },
  {
    //collection
    collection: "incoming"
  }
);

//export
module.exports = mongoose.model("incoming", mySchema);
