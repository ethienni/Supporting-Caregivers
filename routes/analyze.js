let express = require("express");
let router = express.Router();

let analyzeController = require("../controllers/analyze");

router.get("/", analyzeController.displayInfo);
//router.post("/add", analyzeController.processInfo);

module.exports = router;
