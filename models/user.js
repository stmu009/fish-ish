    module.exports = function(sequelize, Sequelize) {

        var User = sequelize.define('user', {
            id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
            username: { type:Sequelize.STRING, validate: {isEmail:true} },
            password : {type: Sequelize.STRING,allowNull: false }, 
            // points : {type: Sequelize.INTEGER}, we can use 'high score' here
            last_login: {type: Sequelize.DATE},
            status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

    });

        User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.vote, {
        onDelete: "cascade"
        });
    };


        return User;

    }