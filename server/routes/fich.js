var express = require("express");
var router = express.Router();
const Fich = require("../models/fichs.js");

router.get("/hello", (req, res) => {
  res.json({ succes: true, message: "hello" });
});

router.get("/fich", (req, res) => {
  res.send("working");
});

router.post("/getFichs", (req, res) => {
  Fich.find({}, function(err, fichs) {
    var all = [];

    fichs.forEach(function(fich) {
      all.push(fich);
    });

    res.json({ succes: true, fichs: all });
  });
});

router.post("/addFich", (req, res) => {
  let fich = new Fich({
    nom: req.body.nom
  });
  fich.save(err => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json({ test_added: true, quest: req.body.nom });
    }
  });
});

router.post("/adddetails", (req, res) => {
  const fich = {
    question: req.body.question,
    answer: req.body.answer
  };
  Fich.findOneAndUpdate(
    { nom: req.body.nom },
    { $push: { details: fich } },
    { safe: true, upsert: false },
    function(err, tes) {
      if (err) {
        res.json({ succes: false, message: "non ajouté" });
      } else {
        res.json({ succes: true, message: "ajouté" });
      }
    }
  );
});
module.exports = router;
