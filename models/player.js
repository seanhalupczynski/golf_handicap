module.export = function(sequelize, DataTypes){
    var Player = sequelize.define("players", {
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

    Player.association = function(models){
        Player.hasMany(models.GolfRounds, {
            onDelete: "cascade"
        });
    }

    return Player;
};