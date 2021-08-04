const Homeowner = require('./Homeowner');
const Contractor = require('./Contractor');
const Project = require('./Project');

Project.belongsTo(Homeowner, {
  foreignKey: 'homeowner_id',
});


module.exports = { Homeowner, Contractor, Project };