var db = require("../models")

module.exports = function(app){
// ========== GET ROUTES ==========
    // Get all tee box data from TeeBox table
    app.get("/api/TeeBox", function(req, res){
        db.TeeBox.findAll().then(function(teeBoxRes){
            res.json(teeBoxRes);
        });
    });

// ========== POST ROUTES ==========
    // Add a tee box to the TeeBox table
    app.post("/api/TeeBox", function(req, res){
        db.TeeBox.create(req.body).then(function(teeBoxRes){
            res.json(teeBoxRes);
        });
    });
// ========== PUT ROUTES ==========

// ========== DELETE ROUTES ==========
    // Delete a tee box from the TeeBox table
    app.delete("/api/TeeBox/:id", function(req, res){
        db.TeeBox.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(teeBoxRes){
            res.json(teeBoxRes);
        });
    });
};