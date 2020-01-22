var db = require("../models")

module.exports = function(app){
// ========== GET ROUTES ==========
    // Get all the players info from Player table
    app.get("/api/players", function(req, res){
        db.Player.findAll().then(function(playerRes){
            res.json(playerRes);
        });
    });

    // Get individual player info from Player table by id
    app.get("/api/players/:id", function(req, res){
        db.Player.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(playerRes){
            res.json(playerRes);
        });
    });

// ========== POST ROUTES ==========
    // Add a new player to the Player table
    app.post("/api/players", function(req, res){
        db.Player.create(req.body).then(function(playerRes){
            res.json(playerRes);
        });
    });

// ========== PUT ROUTES ==========

// ========== DELETE ROUTES ==========
    // Delete a player from Player table by id
    app.delete("/api/players/:id", function(req, res){
        db.Player.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(playerRes){
            res.json(playerRes);
        });
    });
};