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

// ========== POST ROUTES ==========

// ========== PUT ROUTES ==========

// ========== DELETE ROUTES ==========

};