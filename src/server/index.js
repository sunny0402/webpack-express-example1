var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
var cors = require("cors");

var json = {
  title: "test json response",
  message: "this is a message",
  time: "now",
};
/* Middleware*/
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("dist"));

console.log(JSON.stringify(mockAPIResponse));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  res.json(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
