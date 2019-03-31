let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

//Connecting to Database
let mongoose = require("mongoose");
let DB = require("./config/db");
mongoose.connect(DB.URI);

//we need the given default connection to open it
let mongo = mongoose.connection;

mongo.on("open", () => console.log("Connected to DB"));

//Routers
let indexRouter = require("./routes/index");
let contactRouter = require("./routes/contact");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules")));

//Using the routess
app.use("/", indexRouter);

//TO DO ROUTE
app.use("/contact-list", contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
