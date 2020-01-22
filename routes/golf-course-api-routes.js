var db = require("../models")

module.exports = function(app){
// ========== GET ROUTES ==========
    // Get all the golf courses info from GolfCourse table
    app.get("/api/golf_courses", function(req, res){
        db.GolfCourse.findAll().then(function(golfCourseRes){
            res.json(golfCourseRes);
        });
    });

    // Get individual golf course info from GolfCourse table by id
    app.get("/api/golf_courses/:id", function(req, res){
        db.GolfCourse.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(golfCourseRes){
            res.json(golfCourseRes);
        });
    });

// ========== POST ROUTES ==========
    // Add a new golf course to the GolfCourse table
    app.post("/api/golf_courses", function(req, res){
        db.GolfCourse.create(req.body).then(function(golfCourseRes){
            res.json(golfCourseRes);
        });
    });

// ========== PUT ROUTES ==========

// ========== DELETE ROUTES ==========
    // Delete a golf course from GolfCourse table by id
    app.delete("/api/golf_courses/:id", function(req, res){
        db.GolfCourse.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(golfCourseRes){
            res.json(golfCourseRes);
        });
    });
};