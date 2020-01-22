// NPM Package Dependencies
const express = require("express");

// Set up Express Server
const app = express();
var PORT = process.env.PORT || 5000;

// Require models directory for syncing
var db = require("./models");
// Setting up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting static directory
app.use(express.static("public"));

// Routes
require("./routes/golf-course-api-routes")(app);
require("./routes/golf-round-api-routes")(app)
require("./routes/player-api-routes")(app)
require("./routes/tee-box-api-routes")(app)
require("./routes/html-routes")(app);

// Syncing our squelize models and then starting our Express app
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Application listening on port " + PORT);
    });
});
