var db = require("../models")

module.exports = function(app){
// ========== GET ROUTES ==========
    // Get all golf rounds on the GolfRound table
    app.get("/api/GolfRounds", function(req, res){
        db.GolfRound.findAll().then(function(golfRoundRes){
            res.json(golfRoundRes);
        });
    });

    // Get specific golf round from the GolfRound table by id
    app.get("/api/GolfRounds/:id", function(req, res){
        db.GolfRound.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(golfRoundRes){
            res.json(golfRoundRes);
        });
    });

    // Get all golf rounds by a specific player
    app.get("/api/GolfRounds/player/:playerid", function(req, res){
        db.GolfRound.findAll({
            include: [
                { model: Player, where: { id: req.params.playerid } }
            ]
        }).then(function(golfRoundRes){
            res.json(golfRoundRes);
        });
    });

// ========== POST ROUTES ==========
    // Add a golf round to the GolfRound table
    app.post("/api/GolfRounds", function(req, res){
        db.GolfRound.create(req.body).then(function(golfRoundRes){
            res.json(golfRoundRes);
        });
    });

// ========== PUT ROUTES ==========

// ========== DELETE ROUTES ==========
    // Remove a golf round from the GolfRound table by id
    app.delete("/api/GolfRounds/:id", function(req, res){
        db.GolfRound.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(golfRoundRes){
            res.json(golfRoundRes);
        });
    });
};