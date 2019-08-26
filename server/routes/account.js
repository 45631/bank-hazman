var express = require("express");
var router = express.Router();
var connect = require("../data/database");
const userAccount = require("../model/userAccount");

/* GET users listing. */
router.get("/", function(req, res, next) {
  userAccount.find({}, function(err, data) {
    if (err) {
      res.send(err);
    }
    var mydata = JSON.stringify(data);
    res.send(mydata);
  });
});
router.post("/", function(req, res, next) {
  const newAction = new userAccount({
    userId: req.body.id,
    date: req.body.date,
    category: req.body.category,
    to: req.body.toId,
    pull: req.body.pull,
    push: req.body.push
  });
  next();
  newAction.save().then(() => console.log("save in db"));
});

module.exports = router;
