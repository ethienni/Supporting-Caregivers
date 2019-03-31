healthModel = require("../model/health");

module.exports.displayinfo = (req, res, next) => {
  healthModel.find((err, val) => {
    if (err) {
      console.log("something went wrong \n" + err);
    } else {
      res.render("health/index", {
        title: "Health View",
        givenValues: val
      });
    }
  });
};

module.exports.displayadd = (req, res, next) => {
  res.render("health/add", {
    title: "Health View"
  });
};

module.exports.processinfo = (req, res, next) => {
  //model

  let object = new healthModel({
    //get FROM BODY
    caregiver: req.body.caregiver,
    patient: req.body.patient,
    behaviour: req.body.behaviour,
    interventiondone: req.body.interventiondone,
    dateandtime: req.body.dateadntime,
    location: req.body.location,
    comments: req.body.comments
  });

  //create

  healthModel.create(object, (err, contactModel) => {
    if (err) {
      console.log(err);
      //goes to the browser as well
      res.end(err);
    } else {
      res.redirect("/");
    }
  });
};
