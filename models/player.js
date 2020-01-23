module.exports = function(sequelize, DataTypes){
    var Player = sequelize.define("Player", {
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
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Player.associate = function(models){
        Player.hasMany(models.GolfRound, {
            foreignKey: {
                name: "player_id",
                allowNull: false
            },
            onDelete: "cascade"
        });
    }

    return Player;
};