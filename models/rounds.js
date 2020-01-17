module.exports = function(sequelize, DataTypes){
    var GolfRounds = sequelize.define("golf_rounds", {
        player_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        golf_course_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    GolfRounds.associate = function(models){
        // Associatiing Golf Round to Player
        // Adding a foreign key constraint so that a Golf Round can not be created without a Player
        GolfRounds.belongsTo(models.Player, {
            foreignKey: {
                allowNull: false
            }
        });

        GolfRounds.hasMany(GolfCourse, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return GolfRounds
}