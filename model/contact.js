//this will be the model
let mongoose = require("mongoose");

let mySchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number
  },
  {
    collection: "first"
  }
);
//then we export our schema to use in our route
module.exports = mongoose.model("contact", mySchema);
