const dashboardRouter = require('express').Router();
const { Homeowner } = require('../models');
const withAuth = require('../utils/auth');


dashboardRouter.get('/', withAuth, async (req, res) => {
        try{const homeowner = await Homeowner.findOne({
          where: { email:req.session.email },
          attributes: { exclude: ['password'] }
        });
          console.log(homeowner.dataValues);
        res.render("dashboard", {homeowner:homeowner.dataValues} );
        }catch (err) {
          res.status(400).json(err);
        }

});

dashboardRouter.post('/create', async (req, res) => {
    try {
      const dbUserData = await Homeowner.create({
        full_name: req.body.full_name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

dashboardRouter.post('/login', async (req, res) => {
    try {
      const user = await Homeowner.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!user) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }
  
      const validPassword = user.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }
  
      req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.email;
        req.session.loggedIn = true;
  
        res.json({ user, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json({ message: 'No user account found!' });
    }
  });

module.exports = dashboardRouter;