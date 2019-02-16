// i'll neeed mongoose, routing for rendering the information etc

let mongoose = require("mongoose");
let express = require("express");
let router = express.Router();

// i Need the MODEL without the model i can't use find() or insert() etc
let contactModel = require("../model/contact");

//testing the home directory first
router.get("/", (req, res, next) => {
  contactModel.find((err, contactList) => {
    if (err) {
      console.log("Something went Absolutely wrong \n" + err);
    } else {
      console.log(contactList);
      res.render("contact/index", {
        title: "Contact Page",
        givenValues: contactList
      });
    }
  });
});

//get Route for the add page (displays the page)
router.get("/add", (req, res, next) => {
  res.render("contact/add", {
    title: "Add new Contact"
  });
});

//POST Route for processing the add page

router.post("/add", (req, res, next) => {
  console.log(req.body);

  //get the body

  let newContact = contactModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  });

  //add info using create
  contactModel.create(newContact, (err, contactModel) => {
    if (err) {
      console.log(err);
      //goes to the browser as well
      res.end(err);
    } else {
      res.redirect("/contact-list");
    }
  });
});

module.exports = router;
