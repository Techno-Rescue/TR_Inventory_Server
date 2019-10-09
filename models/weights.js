module.exports = function(sequelize, Sequelize) {

var Weights = sequelize.define('weights', {
		weight_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        invoice: {type: Sequelize.STRING, allowNull: false},
        category: {type: Sequelize.STRING, allowNull: false},
        weight: {type: Sequelize.STRING, allowNull: false},
        type: {type: Sequelize.STRING, allowNull: false},
        notes: {type: Sequelize.STRING, allowNull: true},
        entered_by: {type: Sequelize.STRING, allowNull: false},
        edited_by: {type: Sequelize.STRING, allowNull: false}
    }, {
  sequelize,
  modelName: 'weights',
  timestamps: true,
  freezeTableName: true
});
return Weights;
}
