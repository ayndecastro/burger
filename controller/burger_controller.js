const express = require("express");

let router = express.Router();

let burger = require("../models/burger");

router.get("/", function(req,res){
    burger.all(function(data){
        let burgrObject = {
            burger: data
        };
        console.log(burgrObject);
        res.render("index", burgrObject);
    });
});

router.post("/api/burger", function(req,res){
    burger.create([
        "burger_name", "devaured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({ id: result.insertId});
    });
});


router.put("/api/burger/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(resut){
        if(result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function(req, res) {
    let condition = "id= " + req.params.id;

    burger.delete(condition, function(result) {
        if(result.affectedRow == o) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export to server.js
module.exports = router;