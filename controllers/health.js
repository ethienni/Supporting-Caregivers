healthModel = require("../model/health");
var fs = require('fs');

module.exports.displayinfo = (req, res, next) => {
  healthModel.find((err, val) => {
    if (err) {
      console.log("something went wrong \n" + err);
    } else {
      res.render("health/index", {
        title: "Health View",
        givenValues: val
      });
      console.log(val);
    }
  });
};

//localhost:3000/health/test to call patient list
module.exports.displayPatients = (req, res, next) => {
  healthModel.distinct("patient", {}, function(err, patients){
    if(err){
       console.log(err);
    }
    else{
      res.json(patients);
      //jsonfile.writeFile('');
        res.render("health/test",{
          title: "Health View",
          data: patients
         
        }  
        
        );
    }
  })
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
