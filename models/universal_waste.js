module.exports = (sequelize, Sequelize) => {

var UniversalWaste = sequelize.define('universal_waste', {
	waste_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	invoice: {type: Sequelize.STRING, allowNull: false},
	type: {type: Sequelize.STRING, allowNull: false},
	size: {type: Sequelize.STRING, allowNull: false},
	status: {type: Sequelize.STRING, allowNull: false},
	notes: {type: Sequelize.STRING, allowNull: true},
	entered_by: {type: Sequelize.STRING, allowNull: false},
	edited_by: {type: Sequelize.STRING, allowNull: false}
    }, {
	sequelize,
	modelName: 'universal_waste',
	timestamps: true,
	freezeTableName: true
});
	return UniversalWaste;
}