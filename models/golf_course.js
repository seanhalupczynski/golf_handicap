module.exports = function(sequelize, DataTypes){
    var GolfCourse = sequelize.define("golf_courses", {
        course_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        zip_postal_code: {
            type: DataTypes.INTEGER
        },
        slope: {
            type: DataTypes.INTEGER
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1)
        },
        tee_box: {
            type: DataTypes.INTEGER
        },
        hole_1_num: {
            type: DataTypes.INTEGER
        },
        hole_1_handicap: {
            type: DataTypes.INTEGER
        },
        hole_1_par: {
            type: DataTypes.INTEGER
        },
        hole_1_dist: {
            type: DataTypes.INTEGER
        },
        hole_2_num: {
            type: DataTypes.INTEGER
        },
        hole_2_handicap: {
            type: DataTypes.INTEGER
        },
        hole_2_par: {
            type: DataTypes.INTEGER
        },
        hole_2_dist: {
            type: DataTypes.INTEGER
        },
        hole_3_num: {
            type: DataTypes.INTEGER
        },
        hole_3_handicap: {
            type: DataTypes.INTEGER
        },
        hole_3_par: {
            type: DataTypes.INTEGER
        },
        hole_3_dist: {
            type: DataTypes.INTEGER
        },
        hole_4_num: {
            type: DataTypes.INTEGER
        },
        hole_4_handicap: {
            type: DataTypes.INTEGER
        },
        hole_4_par: {
            type: DataTypes.INTEGER
        },
        hole_4_dist: {
            type: DataTypes.INTEGER
        },
        hole_5_num: {
            type: DataTypes.INTEGER
        },
        hole_5_handicap: {
            type: DataTypes.INTEGER
        },
        hole_5_par: {
            type: DataTypes.INTEGER
        },
        hole_5_dist: {
            type: DataTypes.INTEGER
        },
        hole_6_num: {
            type: DataTypes.INTEGER
        },
        hole_6_handicap: {
            type: DataTypes.INTEGER
        },
        hole_6_par: {
            type: DataTypes.INTEGER
        },
        hole_6_dist: {
            type: DataTypes.INTEGER
        },
        hole_7_num: {
            type: DataTypes.INTEGER
        },
        hole_7_handicap: {
            type: DataTypes.INTEGER
        },
        hole_7_par: {
            type: DataTypes.INTEGER
        },
        hole_7_dist: {
            type: DataTypes.INTEGER
        },
        hole_8_num: {
            type: DataTypes.INTEGER
        },
        hole_8_handicap: {
            type: DataTypes.INTEGER
        },
        hole_8_par: {
            type: DataTypes.INTEGER
        },
        hole_8_dist: {
            type: DataTypes.INTEGER
        },
        hole_9_num: {
            type: DataTypes.INTEGER
        },
        hole_9_handicap: {
            type: DataTypes.INTEGER
        },
        hole_9_par: {
            type: DataTypes.INTEGER
        },
        hole_9_dist: {
            type: DataTypes.INTEGER
        },
        hole_10_num: {
            type: DataTypes.INTEGER
        },
        hole_10_handicap: {
            type: DataTypes.INTEGER
        },
        hole_10_par: {
            type: DataTypes.INTEGER
        },
        hole_10_dist: {
            type: DataTypes.INTEGER
        },
        hole_11_num: {
            type: DataTypes.INTEGER
        },
        hole_11_handicap: {
            type: DataTypes.INTEGER
        },
        hole_11_par: {
            type: DataTypes.INTEGER
        },
        hole_11_dist: {
            type: DataTypes.INTEGER
        },
        hole_12_num: {
            type: DataTypes.INTEGER
        },
        hole_12_handicap: {
            type: DataTypes.INTEGER
        },
        hole_12_par: {
            type: DataTypes.INTEGER
        },
        hole_12_dist: {
            type: DataTypes.INTEGER
        },
        hole_13_num: {
            type: DataTypes.INTEGER
        },
        hole_13_handicap: {
            type: DataTypes.INTEGER
        },
        hole_13_par: {
            type: DataTypes.INTEGER
        },
        hole_13_dist: {
            type: DataTypes.INTEGER
        },
        hole_14_num: {
            type: DataTypes.INTEGER
        },
        hole_14_handicap: {
            type: DataTypes.INTEGER
        },
        hole_14_par: {
            type: DataTypes.INTEGER
        },
        hole_14_dist: {
            type: DataTypes.INTEGER
        },
        hole_15_num: {
            type: DataTypes.INTEGER
        },
        hole_15_handicap: {
            type: DataTypes.INTEGER
        },
        hole_15_par: {
            type: DataTypes.INTEGER
        },
        hole_15_dist: {
            type: DataTypes.INTEGER
        },
        hole_16_num: {
            type: DataTypes.INTEGER
        },
        hole_16_handicap: {
            type: DataTypes.INTEGER
        },
        hole_16_par: {
            type: DataTypes.INTEGER
        },
        hole_16_dist: {
            type: DataTypes.INTEGER
        },
        hole_17_num: {
            type: DataTypes.INTEGER
        },
        hole_17_handicap: {
            type: DataTypes.INTEGER
        },
        hole_17_par: {
            type: DataTypes.INTEGER
        },
        hole_17_dist: {
            type: DataTypes.INTEGER
        },
        hole_18_num: {
            type: DataTypes.INTEGER
        },
        hole_18_handicap: {
            type: DataTypes.INTEGER
        },
        hole_18_par: {
            type: DataTypes.INTEGER
        },
        hole_18_dist: {
            type: DataTypes.INTEGER
        }
    });

    GolfCourse.associate = function(){
        GolfCourse.hasMany(TeeBox, {
            
        });
    };

    GolfCourse.associate = function(){
        GolfCourse.belongsTo(GolfRound)
    }

  return GolfCourse
};