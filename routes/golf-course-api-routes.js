var db = require("../models")

module.exports = function(app){
// ========== GET ROUTES ==========
    // Get all golf courses from GolfCourse table
    app.get("/api/GolfCourses", function(req, res){
        db.GolfCourse.findAll().then(function(golfCourseRes){
            res.json(golfCourseRes);
        });
    });

    // Get specific golf course from GolfCourse table by id
    app.get("/api/GolfCourses/:id", function(req, res){
        db.GolfCourse.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(golfCourseRes){
            res.json(golfCourseRes);
        });
    });
    
// ========== POST ROUTES ==========
    // Add a golf course to the Golf Course table
    app.post("/api/GolfCourses", function(req, res){
        db.GolfCourse.create(req.body).then(function(golfCourseRes){
            res.json(golfCourseRes);
        });
    });
// ========== PUT ROUTES ==========
    // Update a golf course's data on the Golf Course table

// ========== DELETE ROUTES ==========
    // Delete a golf course from the Golf Course table
    app.delete("api/GolfCourse/:id", function(req, res){
        db.GolfCourse.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(golfCourseRes){
            res.json(golfCourseRes);
        });
    });
};