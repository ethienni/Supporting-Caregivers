//Create model class

let mongoose = require("mongoose");

//creates a generic schema -

let contactSchema = mongoose.Schema(
  //we know it'll take an object
  {
    firstName: String,
    lastName: String,
    age: Number
  },
  {
    collection: "first"
  }
);

//now i got to make it so that i can export & require it elswhere
//test being my database name, and schema being well my schema
module.exports = mongoose.model("test", contactSchema);
