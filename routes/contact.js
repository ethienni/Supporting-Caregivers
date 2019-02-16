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

  //Create a new Object
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

//Get request for displaying the edit page :ID says it's a variable from our parameter
router.get("/edit/:id", (req, res, next) => {
  //params in the link and id is the variable within the link

  let id = req.params.id;

  //Find our ID
  contactModel.findById(id, (err, contactObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //Get the ID's information using our contactObject
      res.render("contact/edit", {
        title: "Edit Contact",
        contact: contactObject
      });
    }
  });
});

router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  //we are going to need The model
  let updatedContact = contactModel({
    _id: id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  });

  //now we can use the update - basically
  contactModel.update({ _id: id }, updatedContact, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the contact List
      res.redirect("/contact-list");
    }
  });
});
//Get Request to perform the delete action
router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;
  contactModel.remove({ _id: id }, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contact-list");
    }
  });
});
module.exports = router;
