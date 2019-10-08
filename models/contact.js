module.exports = (sequelize, Sequelize) => {

var Contact = sequelize.define('contact', {
	contact_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		unique: true
	},
	client_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	contact_type: {
		type: Sequelize.STRING,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
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
	modelName: 'contact',
	timestamps: true
});
return Contact;
}