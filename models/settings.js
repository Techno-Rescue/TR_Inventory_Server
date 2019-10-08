module.exports = (sequelize, Sequelize) => {

var Settings = sequelize.define('settings', {
	setting_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	type: {type: Sequelize.STRING, allowNull: true},
	value: {type: Sequelize.STRING, allowNull: true}
	}, {
	sequelize,
	modelName: 'settings',
	timestamps: true,
	freezeTableName: true
});
return Settings;
}