module.exports = function(sequelize, DataTypes){
    var GolfRound = sequelize.define("GolfRound", {
        front_score: {
            type: DataTypes.INTEGER
        },
        front_putts: {
            type: DataTypes.INTEGER
        },
        front_firs: {
            type: DataTypes.INTEGER
        },
        front_girs: {
            type: DataTypes.INTEGER
        },
        front_sand_saves: {
            type: DataTypes.INTEGER
        },
        front_up_and_down: {
            type: DataTypes.INTEGER
        },
        front_penalty_strokes: {
            type: DataTypes.INTEGER
        },
        back_score: {
            type: DataTypes.INTEGER
        },
        back_putts: {
            type: DataTypes.INTEGER
        },
        back_firs: {
            type: DataTypes.INTEGER
        },
        back_girs: {
            type: DataTypes.INTEGER
        },
        back_sand_saves: {
            type: DataTypes.INTEGER
        },
        back_up_and_down: {
            type: DataTypes.INTEGER
        },
        back_penalty_strokes: {
            type: DataTypes.INTEGER
        },
        total_score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_putts: {
            type: DataTypes.INTEGER
        },
        total_firs: {
            type: DataTypes.INTEGER
        },
        total_girs: {
            type: DataTypes.INTEGER
        },
        total_sand_saves: {
            type: DataTypes.INTEGER
        },
        total_up_and_down: {
            type: DataTypes.INTEGER
        },
        total_penalty_strokes: {
            type: DataTypes.INTEGER
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