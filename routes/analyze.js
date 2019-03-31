let express = require("express");
let router = express.Router();

let analyzeController = require("../controllers/analyze");

router.get("/", analyzeController.displayInfo);
router.post("/add", analyzeController.processInfo);

router.get("/", analyzeController.displayinfo);
//router.get("/", analyzeController.displayadd);
router.get("/add", analyzeController.displayadd);
router.post("/add", analyzeController.processinfo);

router.get("/edit/:id", analyzeController.displayedit);
router.post("/edit/:id", analyzeController.processedit);

router.get("/delete/:id", analyzeController.performLogout);

module.exports = router;
