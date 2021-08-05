const sequelize = require('../config/connection');
const { Homeowner } = require('../models');

const homeownerData = require('./homeownerData.json');
//const contractorData = require('./contractorData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Homeowner.bulkCreate(homeownerData, {
    individualHooks: true,
    returning: true,
  });

  // await Contractor.bulkCreate(contractorData, {
  //   individualHooks: true,
  //   returning: true,
  //});

  process.exit(0);
};

seedDatabase();