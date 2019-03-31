//MODEL VARIABLE NAME MUST BE UNIQUE
analyzeModel = require("../model/analyze");

module.exports.displayInfo = (req, res, next) => {
  //FIND BASED ON THE OBJECT ID FROM OTHER TABLE
  analyzeModel.find((err, val) => {
    if (err) {
      console.log(err);
    } else {
      console.log(val.personalRedirection);
    }
  });
};
