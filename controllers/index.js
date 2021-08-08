const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const contractorRoutes = require('./contractor-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/contractor', contractorRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
