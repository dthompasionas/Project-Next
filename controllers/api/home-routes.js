const router = require('express').Router();
const { Homeowner } = require('../../models');

router.get('/', async (req, res) => {
  try {
      
    const userData = await Homeowner.findAll();
    res.status(200).json(userData);

  }catch (err){
    res.status(400).json(err);
  }
});

module.exports = router;