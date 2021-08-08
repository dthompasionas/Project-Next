const dashboardRouter = require('express').Router();
const { Homeowner } = require('../models');
const withAuth = require('../utils/auth');


dashboardRouter.get('/', withAuth, async (req, res) => { 
        try{const homeowner = await Homeowner.findOne({
          where: { email:req.session.email },
          attributes: { exclude: ['password'] }
        });
          console.log(homeowner.dataValues);
          console.log("Are we logged in", req.session.loggedIn); 
        res.render("dashboard", {homeowner:homeowner.dataValues, loggedIn: req.session.loggedIn} );
        }catch (err) {
          console.log(err);
          res.status(400).json(err);
        }

});

module.exports = dashboardRouter;