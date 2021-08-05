const router = require('express').Router();

const homeownerRoutes = require('./homeowner-routes.js');
//const contractorRoutes = require('./contractor-routes.js');

router.use('/homeowner', homeownerRoutes);
//router.use('/contractor', contractorRoutes);

module.exports = router;