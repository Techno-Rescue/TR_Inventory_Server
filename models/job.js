module.exports = (sequelize, Sequelize) => {

var Job = sequelize.define('job', {
        invoice: {type: Sequelize.STRING, primaryKey: true, allowNull: false},
        client_id: {type: Sequelize.INTEGER, allowNull: false},
        job_type: {type: Sequelize.STRING, allowNull: false},
        equipment_disposition_type: {type: Sequelize.STRING, allowNull: false},
        date: {type: Sequelize.STRING, allowNull: true},
        vehicle: {type: Sequelize.STRING, allowNull: true},
        driver: {type: Sequelize.STRING, allowNull: true},
        driver_notes: {type: Sequelize.STRING, allowNull: true},
        driver_equipment: {type: Sequelize.STRING, allowNull: true},
        expected_materials: {type: Sequelize.STRING, allowNull: true},
        dd_type: {type: Sequelize.STRING, allowNull: false},
        dd_quantity: {type: Sequelize.STRING, allowNull: true},
        dd_notes: {type: Sequelize.STRING, allowNull: true},
        weight: {type: Sequelize.STRING, allowNull: true},
        actual_materials: {type: Sequelize.STRING, allowNull: true},
        status: {type: Sequelize.STRING, allowNull: false},
        entered_by: {type: Sequelize.STRING, allowNull: false},
        edited_by: {type: Sequelize.STRING, allowNull: false}
    }, {
  sequelize,
  modelName: 'job',
  timestamps: true
});
return Job;
}