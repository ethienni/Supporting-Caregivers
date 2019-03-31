// i'll neeed mongoose, routing for rendering the information etc
let mongoose = require("mongoose");
let express = require("express");
let router = express.Router();

let contactController = require("../controllers/contact");

//testing the home directory first
router.get("/", contactController.displayContactList);

//get Route for the add page (displays the page)
router.get("/add", contactController.displayAddPage);

//POST Route for processing the add page

router.post("/add", contactController.processAddPage);
/*
//Get request for displaying the edit page :ID says it's a variable from our parameter
router.get("/edit/:id", contactController.displayEditPage);

router.post("/edit/:id", contactController.processEditPage);
//Get Request to perform the delete action
router.get("/delete/:id", contactController.performDelete);
*/
module.exports = router;
