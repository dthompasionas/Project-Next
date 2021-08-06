const contractorRouter = require("express").Router();
const withAuth = require("../utils/auth");
const faker = require("../utils/faker");

contractorRouter.get("/", (req, res) => {
  const contractorData = faker.getContractorData();
  console.log(contractorData);
  console.log(contractorData[0].name);
  res.render("contractors", { contractorData });
});

module.exports = contractorRouter;
