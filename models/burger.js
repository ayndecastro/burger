const orm = require("../config/orm");

let burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res)
        })
    },

    create: function(col, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        })
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    },
    delete: function(condition, cb) {
        orm. delete("burgers", condition, function(res) {
            cb(res);
        })
    }

};

//export to burger_controller.js
module.exports = burger;