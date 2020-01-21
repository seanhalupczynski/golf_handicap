module.exports = function(sequelize, DataTypes){
    const GolfRound = sequelize.define("golf_rounds", {
        // player_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // golf_course_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    // GolfRound.associate = function(models){
    //     // Associatiing Golf Round to Player
    //     // Adding a foreign key constraint so that a Golf Round can not be created without a Player
    //     GolfRound.belongsTo(models.Player, {
    //         foreignKey: {
    //             name: "player_id",
    //             allowNull: false
    //         }
    //     });
    // };

    // GolfRound.associate = function(models){
    //     GolfRound.belongsTo(models.GolfCourse, {
    //         foreignKey: {
    //             name: "golf_course_id",
    //             allowNull: false
    //         }
    //     });
    // }

    return GolfRound
}