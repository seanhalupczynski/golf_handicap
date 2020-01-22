module.exports = function(sequelize, DataTypes){
    var TeeBox = sequelize.define("TeeBox", {
        color: {
            type: DataTypes.STRING
        }
    });

    TeeBox.associate = function(models){
        TeeBox.belongsTo(models.GolfCourse, {
            foreignKey: {
                name: "tee_box_id"
            }
        });
    };

    return TeeBox;
};