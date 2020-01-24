module.exports = function(sequelize, DataTypes){
    var GolfRound = sequelize.define("GolfRound", {
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date_played: {
            type: DataTypes.DATEONLY
        }
    });

    GolfRound.associate = function(models){
        // Associatiing Golf Round to Player
        // Adding a foreign key constraint so that a Golf Round can not be created without a Player
        GolfRound.belongsTo(models.Player, {
            foreignKey: {
                name: "player_id",
                allowNull: false
            }
        });
    };

    GolfRound.associate = function(models){
        GolfRound.belongsTo(models.GolfCourse, {
            foreignKey: {
                name: "golf_course_id",
                allowNull: false
            }
        });
    }

    return GolfRound;
}