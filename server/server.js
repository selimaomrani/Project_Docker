const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const authent = require("./routes/authentificate.js");
const Fich = require("./routes/fich.js");

const testing = require("./routes/testing.js");
var app = express();
//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:4200"
  })
);
mongoose.connect("mongodb://proj_docker_mongodb_1:27017/dockerDB", err => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("connected to mongodb");
  }
});

app.use("/fich", Fich);
app.use("/test", testing);
app.use("/auth", authent);
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(8080, err => {
  if (err) {
    console.log("could not start server");
  } else {
    console.log("server running on port : 8080");
  }
});
