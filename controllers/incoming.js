incomingModel = require("../model/incoming");

//Find - GET
//Update - PUT
//Create - POST
//Remove - DELETE

module.exports.displayinfo = (req, res, next) => {
  incomingModel.find((err, val) => {
    if (err) {
      res.render("incoming/index", {
        title: "Health ISSUE",
        givenValues: val
      });
      console.log("something went wrong \n" + err);
    } else {
      console.log(val);
      res.render("incoming/index", {
        title: "Health View",
        givenValues: val
      });
    }
  });
};

module.exports.displayadd = (req, res, next) => {
  res.render("incoming/add", {
    title: "Health View"
  });
};

module.exports.processinfo = (req, res, next) => {
  //model

  let object = new incomingModel({
    //get FROM BODY
    caregiver: req.body.caregiver,
    patient: req.body.patient,
    typeOfCare: req.body.typeOfCare,
    typeOfAbuse: req.body.typeOfAbuse,
    isAgressive: req.body.isAgressive,
    recommendedPhrases: req.body.recommendedPhrases,
    personalRedirection: req.body.personalRedirection,
    successRating: req.body.successRating,
    comments: req.body.comments
  });

  //create
  incomingModel.create(object, (err, contactModel) => {
    if (err) {
      console.log(err);
      //goes to the browser as well
      res.end(err);
    } else {
      res.redirect("/incoming-list");
    }
  });
};
module.exports.displayedit = (req, res, next) => {
  //get id from link
  let id = req.params.id;

  //Find our ID
  incomingModel.findById(id, (err, incomingObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //Get the ID's information using our contactObject
      res.render("incoming/edit", {
        title: "Edit General Table",
        incoming: incomingObject
      });
    }
  });
};

module.exports.processedit = (req, res, next) => {
  let id = req.params.id;

  let object = new incomingModel({
    //get FROM BODY
    caregiver: req.body.caregiver,
    patient: req.body.patient,
    typeOfCare: req.body.typeOfCare,
    typeOfAbuse: req.body.typeOfAbuse,
    isAgressive: req.body.isAgressive,
    recommendedPhrases: req.body.recommendedPhrases,
    personalRedirection: req.body.personalRedirection,
    successRating: req.body.successRating,
    comments: req.body.comments
  });

  //Get the ID
  incomingModel.update({ _id: id }, object, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the contact List
      res.redirect("/incoming-list");
    }
  });
};
module.exports.performLogout = (req, res, next) => {
  //delete/:id
  let id = req.params.id;
  //dont need much except a function
  incomingModel.remove({ _id: id }, (err, val) => {
    if (err) {
      console.log("something went wrong");
    } else {
      res.redirect("/incoming-list");
    }
  });
};
