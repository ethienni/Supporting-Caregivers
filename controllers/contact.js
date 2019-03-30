// i Need the MODEL without the model i can't use find() or insert() etc
contactModel = require("../model/contact");

module.exports.displayContactList = (req, res, next) => {
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
};
module.exports.displayAddPage = (req, res, next) => {
  res.render("contact/add", {
    title: "Add new Contact"
  });
};
module.exports.processAddPage = (req, res, next) => {
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
};
module.exports.displayEditPage = (req, res, next) => {
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
};

module.exports.processEditPage = (req, res, next) => {
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
};
module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  contactModel.remove({ _id: id }, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contact-list");
    }
  });
};
