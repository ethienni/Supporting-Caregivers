//requirements
//we'll need express to use the routing & mongoose to do the db

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//Create a reference to the db schema
let contact = require("../models/contact");
//Structure so i can start working with my new Route

/* Get Contact list Page - Read Operation */

router.get("/", (req, res, next) => {
  //Contact list displays everything including the error
  contact.find((err, contactList) => {
    if (err) {
      //Well if we get an error what did we get>
      return console.error(err);
    } else {
      console.log(contactList);

      /*
        res.render("contacts/index", {
            title: "contact List",
            //views ---------- ContactList refers to line 14
            contactList: contactList
        });
        */
    }
  });
});

module.exports = router;
