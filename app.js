let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

//Database setup

let mongoose = require("mongoose");
let DB = require("./config/db");

//Open the connection, but currently not applied
mongoose.connect(DB.URI);

//Open the connection to link with nodemon

//active connection
let mongoDB = mongoose.connection;

//applying the connection
mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error"));
mongoDB.once("open", () => {
  console.log("Connected to MongoDB");
});

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

//Using the routs
app.use("/", indexRouter);
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