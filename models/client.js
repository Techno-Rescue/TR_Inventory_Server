module.exports = (sequelize, Sequelize) => {

var Client = sequelize.define('client', {
	client_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
    address: {
    	type: Sequelize.STRING,
    	allowNull: true
    },
    city: {
    	type: Sequelize.STRING,
    	allowNull: true
    },
    state: {
    	type: Sequelize.STRING,
    	allowNull: true
    },
    zip: {
    	type: Sequelize.STRING,
    	allowNull: true
    },
	phone: {
		type: Sequelize.STRING,
		allowNull: true
	},
    email: {
    	type: Sequelize.STRING,
    	allowNull: true
    },
    instructions: {
    	type: Sequelize.STRING,
    	allowNull: true
    },
    entered_by: {
    	type: Sequelize.STRING,
    	allowNull: false
    },
    edited_by: {
    	type: Sequelize.STRING,
    	allowNull: false
    }
}, {
	sequelize,
	modelName: 'client',
	timestamps: true
});
return Client;
}