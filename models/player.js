module.exports = function(sequelize, DataTypes){
    const Player = sequelize.define("players", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        handicap: {
            type: DataTypes.INTEGER
        },
        rounds: {
            type: DataTypes.INTEGER
        }
    });

    // Player.association = function(models){
    //     Player.belongsTo(models.GolfRound, {
    //         foreignKey: {
    //             name: "player_id",
    //             allowNull: false
    //         },
    //         onDelete: "cascade"
    //     });
    // }

    return Player;
};