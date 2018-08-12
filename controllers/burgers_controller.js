const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js");



router.get('/', function (req, res) {
   burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/burgers", function(req, res) {
  console.log("this works");
  burger.insertOne([
    "burger_name"
    // , "devoured"
  ], [
    req.body.burger_name
    // , req.body.devoured

  ], function(result) {
    // Send back the ID of the new quote
   
    res.redirect('/');
  });
});

router.put("/burgers/:id", function(req, res) {
  console.log("this works");
  var condition = "id = " + req.params.id;

  // console.log("devoured", condition);

    burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// router.delete("/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


module.exports = router;