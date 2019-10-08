module.exports = function(sequelize, Sequelize) {

var Inventory = sequelize.define('inventory', {
		inventory_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        invoice: {type: Sequelize.STRING, allowNull: false},
        make: {type: Sequelize.STRING, allowNull: false},
        model: {type: Sequelize.STRING, allowNull: false},
        serial: {type: Sequelize.STRING, allowNull: false},
        asset_tag: {type: Sequelize.STRING, allowNull: true},
        status: {type: Sequelize.STRING, allowNull: true},
        disposition_type: {type: Sequelize.STRING, allowNull: false},
        notes: {type: Sequelize.STRING, allowNull: true},
        entered_by: {type: Sequelize.STRING, allowNull: false},
        edited_by: {type: Sequelize.STRING, allowNull: false}
    }, {
  sequelize,
  modelName: 'inventory',
  timestamps: true,
  freezeTableName: true
});
return Inventory;
}