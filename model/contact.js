//this will be the model
let mongoose = require("mongoose");

let mySchema = mongoose.Schema(
  {
    name: String
  },
  {
    collection: "patient"
  }
);
//then we export our schema to use in our route
module.exports = mongoose.model("name", mySchema);
