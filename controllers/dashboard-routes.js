const dashboardRouter = require('express').Router();
const { Homeowner } = require('../models');
const withAuth = require('../utils/auth');


dashboardRouter.get('/', withAuth, async (req, res) => {
    try {
        const userData = await Homeowner.findAll({
          attributes: { exclude: ['password'] },
          order: [['username', 'ASC']],
        });
    
        const users = userData.map((el) => el.get({ plain: true }));
    
        res.render('dashboard', {
          users,
          logged_in: req.session.logged_in,
        });
      } catch (err) {
        res.status(500).json(err);
      }
});


module.exports = dashboardRouter;