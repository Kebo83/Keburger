const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js");



router.get('/', function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function (req, res) {
  // console.log("this works1");
  // var burger=this.data;
  burger.create([
    "burger_name", "devoured"
  ], [req.body.burger_name, req.body.devoured],
    function () {res.redirect('/');});
});

// PUT route to update burger devoured state.
// router.put("/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);
//   burger.updateOne(req.body.burger_name, function (result) {
//      devoured: req.body.devoured
//     console.log(req.body.burger_name);
//     console.log(result);
//     res.redirect('/');
//   });
// });
router.post('/burgers/:id', function (req, res) {
  // console.log("devoured " + req.query);
  // console.log(req.query);
  // console.log("devoured");
  burger.updateOne(req.params.id, function(result) {
    devoured= true
    res.redirect('/'); 
  });
});


// var condition = "id = " + req.params.id;

// console.log("condition", condition);

// burger.updateOne({
//   devoured: req.body.devoured
// }, condition, function(result) {
//   if (result.changedRows == 0) {
//     // If no rows were changed, then the ID must not exist, so 404
//     res.redirect('/');
//   } else {
//     res.status(200).end();
//   }
// });
// });




// router.put("api/burgers/:id", function (req, res) {
//     var id = req.params.id;

//     console.log("id", id);

//     burger.updateOne(id, function () {
//         $.ajax({
//       url: "api/burgers/" + id,
//       method: "PUT",
//       data: devoured
//     }).then(function(result){
//     });
//         res.redirect("/");
//     });
// });
// router.put("/burgers/:id", function(req, res) {
//   console.log("this doesnt work now");
//   console.log(req.params.id);
//   var condition = "id = " + req.params.id;
// console.log(res);
//   console.log("condition", condition);
//     burger.updateOne({
//     devoured= true,
//     // req.body.burger_name
//     }, condition, function(res) {
//     res.redirect('/');
//   });
// });
//   devoured: true
//   }, condition, function(result) {
//   if (result.changedRows == 0) {
//     // If no rows were changed, then the ID must not exist, so 404
//     console.log(req.params.id);
//     return res.status(404).end();
//   } else {
//     res.status(200).end();
//   }
// });
// });

router.post('/burgers/delete/:id', function(req, res) {
  var condition = "id = " + req.params.id;
// console.log(condition);
  burger.delete(condition, function(result) {
    // if (result.affectedRows == 0) {
    //   // If no rows were changed, then the ID must not exist, so 404
    //   return res.status(404).end();
    // } else {
    //   res.status(200).end();
    // }
    res.redirect('/'); 
});
});


module.exports = router;