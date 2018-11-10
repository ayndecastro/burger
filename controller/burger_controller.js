
let express = require('express');
let router = express.Router();

let burger = require('../models/burger.js');

router.get('/', function(req, res) {
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

router.get("/api/burgers", function(req,res){
  burger.all(function(data){
    res.send(data);
  })
})

router.post("/api/burgers", (req, res) => {
  burger.create([
      "burger_name", "devoured"
  ], [req.body.burger_name, 0], result => {
      // res.json({
      //     id: result.insertId
      // });
      res.redirect('/')
  });
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  console.log("condition is", condition);

  burger.update({
      devoured: true
  }, condition, result => {
      if (result.changedRows == 0) {
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});

// Export
module.exports = router;