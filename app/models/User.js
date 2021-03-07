module.exports = (sequelize, Sequelize) => {
	const Users = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
            type: Sequelize.TEXT
        },
        password: {
            type: Sequelize.TEXT
        },
        firstname: {
            type: Sequelize.TEXT
        },
        lastname: {
            type: Sequelize.TEXT
        },
        authority: {
            type: Sequelize.TEXT
        }
    }, {
        timestamps: false
    });
	
	return Users;
}