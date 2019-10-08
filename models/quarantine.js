module.exports = (sequelize, Sequelize) => {

var Quarantine = sequelize.define('quarantine', {
	quarantine_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	invoice: {type: Sequelize.STRING, allowNull: false},
	type: {type: Sequelize.STRING, allowNull: false},
	size: {type: Sequelize.STRING, allowNull: false},
	status: {type: Sequelize.STRING, allowNull: false},
	notes: {type: Sequelize.STRING, allowNull: true},
	entered_by: {type: Sequelize.STRING, allowNull: false},
	edited_by: {type: Sequelize.STRING, allowNull: false}
	}, {
	sequelize,
	modelName: 'quarantine',
	timestamps: true,
	freezeTableName: true
});
return Quarantine;
}