let express = require("express");
let router = express.Router();

let healthController = require("../controllers/health");

router.get("/", healthController.displayinfo);
//router.get("/", healthController.displayadd);
router.post("/", healthController.processinfo);

module.exports = router;
