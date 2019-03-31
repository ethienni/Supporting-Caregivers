let mongoose = require("mongoose");

//schema
let mySchema = mongoose.Schema(
  {
    caregiver: String,
    patient: String,
    behaviour: String,
    interventiondone: String,
    dateandtime: String,
    location: String,
    comments: String
  },
  {
    //collection
    collection: "table"
  }
);

//export
module.exports = mongoose.model("health", mySchema);
