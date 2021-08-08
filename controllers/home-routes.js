const router = require('express').Router();
const { Homeowner } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
      const userData = await Homeowner.findAll({
        attributes: { exclude: ['password'] },
        order: [['email', 'ASC']],
      });
  
      const users = userData.map((el) => el.get({ plain: true }));
  
      res.render('login',
        {
        users,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;