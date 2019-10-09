module.exports = function(sequelize, Sequelize) {

var Times = sequelize.define('times', {
		time_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        invoice: {type: Sequelize.STRING, allowNull: false},
        type: {type: Sequelize.STRING, allowNull: true},
        notes: {type: Sequelize.STRING, allowNull: true},
        entered_by: {type: Sequelize.STRING, allowNull: false},
        edited_by: {type: Sequelize.STRING, allowNull: false}
    }, {
  sequelize,
  modelName: 'times',
  timestamps: true,
  freezeTableName: true
});
return Times;
}
