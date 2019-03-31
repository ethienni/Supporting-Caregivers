let express = require("express");
let router = express.Router();

let healthController = require("../controllers/incoming");

router.get("/", healthController.displayinfo);
//router.get("/", healthController.displayadd);
router.get("/add", healthController.displayadd);
router.post("/add", healthController.processinfo);

router.get("/edit/:id", healthController.displayedit);
router.post("/edit/:id", healthController.processedit);

router.get("/delete/:id", healthController.performLogout);

module.exports = router;
