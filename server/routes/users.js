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
router.post("/login", function(req, res, next) {
  var userName = req.body.userName;
  var password = req.body.password;
  if (userName == "shula" && password == "1234") {
    res.send({ userName: "shula", mail: "sh@hfhn" });
  } else {
    res.send({ err: "not found" });
  }
});
router.post("/search", function(req, res, next) {
  var domain = req.body.domain;
  userModel.find({}, function(err, users) {
    if (err) {
      res.send(err);
    }
    const filteredUsers = users.filter(user => user.domain.includes(domain));
    var mydata = JSON.stringify(filteredUsers);
    res.send(mydata);
  });
});
router.post("/", function(req, res, next) {
  var newUser = new userModel({
    id: req.body.id,
    name: req.body.name,
    userName: req.body.userName,
    mail: req.body.mail,
    phone: req.body.phone,
    city: req.body.city,
    domain: req.body.domain
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
