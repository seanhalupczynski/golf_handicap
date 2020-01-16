module.exports = function(sequelize, DataTypes){
    var TeeBox = sequelize.define("tee_box", {
        color: {
            type: DataTypes.STRING
        }
    });

    TeeBox.associate = function(models){
        TeeBox.belongsTo(models.GolfCourse);
    };
    return TeeBox
};