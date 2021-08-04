const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const homeownerRoutes = require('./homeowner-routes.js');
const contractorRoutes = require('./contractor-routes.js');

router.use('/', homeRoutes);
router.use('/homeowner', homeownerRoutes);
router.use('/contractor', contractorRoutes);

module.exports = router;