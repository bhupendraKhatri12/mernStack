"use strict";

var express = require("express");

var app = express();
app.get('/', function (req, res) {
  res.send("helloe");
});
app.listen("4000", function () {
  console.log("Server Started");
});