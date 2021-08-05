const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
      const userData = await Homeowner.findAll({
        attributes: { exclude: ['password'] },
        order: [['username', 'ASC']],
      });
  
      const users = userData.map((el) => el.get({ plain: true }));
  
      res.render('main', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;