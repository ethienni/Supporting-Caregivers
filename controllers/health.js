healthModel = require("../model/health");

module.exports.displayinfo = (req, res, next) => {
  healthModel.find((err, res) => {
    if (err) {
      console.log("something went wrong \n" + err);
    } else {
      console.log(res);
    }
  });
};
