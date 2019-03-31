let express = require("express");
let router = express.Router();

let healthController = require("../controllers/health");

router.get("/", healthController.displayinfo);
router.get("/add", healthController.displayadd);
router.post("/add", healthController.processinfo);

module.exports = router;
