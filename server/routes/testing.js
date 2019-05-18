var express = require("express");
var router = express.Router();
const Test = require("../models/test.js");

router.post("/getTests", (req, res) => {
  Test.find({}, function(err, tests) {
    var all = [];

    tests.forEach(function(test) {
      all.push(test);
    });

    res.json({ succes: true, tests: all });
  });
});

router.post("/addTest", (req, res) => {
  let test = new Test({
    question: req.body.question,
    answer: req.body.answer
  });
  test.save(err => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json({ test_added: true, quest: req.body.question });
    }
  });
});

router.post("/removeTests", (req, res) => {
  Test.findByIdAndRemove({ _id: req.body.id }, (err, test) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.send("done", test);
    }
  });
});
module.exports = router;
