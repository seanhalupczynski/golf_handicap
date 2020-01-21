module.exports = function(sequelize, DataTypes){
    const TeeBox = sequelize.define("tee_box", {
        color: {
            type: DataTypes.STRING
        }
    });

    // TeeBox.associate = function(models){
    //     TeeBox.belongsTo(models.GolfCourse, {
    //         foreignKey: {
    //             name: "tee_box_id"
    //         }
    //     });
    // };

    return TeeBox
};