var express = require("express");
var router = express.Router();
var connect = require("../data/database");
const userModel = require("../model/users");

/* GET users listing. */
router.get("/", function(req, res, next) {
  userModel.find({}, function(err, data) {
    if (err) {
      res.send(err);
    }
    var mydata = JSON.stringify(data);
    res.send(mydata);
  });
});
router.post("/", function(req, res, next) {
  var arr = [];
  var baby = req.body.baby;
  if (baby) {
    arr.push("שמרטפות");
  }
  var tv = req.body.tv;
  if (tv) {
    arr.push("טכנולוגיה");
  }
  var pen = req.body.pen;
  if (pen) {
    arr.push("כתיבה");
  }
  var motorcycle = req.body.motorcycle;
  if (motorcycle) {
    arr.push("שליחויות");
  }
  var cap = req.body.cap;
  if (cap) {
    arr.push("לימודי עזר");
  }
  var dog = req.body.dog;
  if (dog) {
    arr.push("דוגיסיטר");
  }
  var car = req.body.car;
  if (car) {
    arr.push("הסעות");
  }
  var hamburger = req.body.hamburger;
  if (hamburger) {
    arr.push("בישול");
  }
  var tools = req.body.tools;
  if (tools) {
    arr.push("עבודות תחזוקה");
  }

  var newUser = new userModel({
    id: req.body.id,
    name: req.body.name,
    mail: req.body.mail,
    phone: req.body.phone,
    domain: arr
  });
  next();
  newUser.save().then(() => console.log("save in db"));
});

router.put("/", function(req, res) {
  var query = { name: req.body.name };
  console.log(query);

  userModel.findOneAndUpdate(
    query,
    { $set: { name: req.body.newName } },
    (err, document) => {
      if (err) {
        console.log(err);
      }
      console.log(document);
    }
  );
});

router.delete("/", function(req, res) {
  userModel.findOneAndDelete({ name: req.body.name }, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("user Deleted!!");
    }
  });
});

module.exports = router;
