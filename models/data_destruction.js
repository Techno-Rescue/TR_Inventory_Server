module.exports = function(sequelize, Sequelize) {

var DataDestruction = sequelize.define('data_destruction', {
	data_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	invoice: {type: Sequelize.STRING, allowNull: false},
	serial: {type: Sequelize.STRING, allowNull: false},
	method: {type: Sequelize.STRING, allowNull: false},
	status: {type: Sequelize.STRING, allowNull: false},
	destroyed_on: {type: Sequelize.STRING, allowNull: true},
	notes: {type: Sequelize.STRING, allowNull: true},
	entered_by: {type: Sequelize.STRING, allowNull: false},
	edited_by: {type: Sequelize.STRING, allowNull: false}
    }, {
  sequelize,
  modelName: 'data_destruction',
  timestamps: true,
  freezeTableName: true
});
return DataDestruction;
}
