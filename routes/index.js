// File name: index.js
// Studemt Name: Yuk Sing Cheung
// Student ID: 301230209
// Date: Sep 30,2022

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Home",
    welcomeMsg: "Welcome to Jacky home page.",
  });
});
router.get("/about", function (req, res, next) {
  res.render("about", {
    title: "About me",
  });
});
router.get("/project", function (req, res, next) {
  res.render("project", {
    title: "Project",
  });
});
router.get("/service", function (req, res, next) {
  res.render("service", {
    title: "Service",
  });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", {
    title: "Contact me",
  });
});

module.exports = router;
