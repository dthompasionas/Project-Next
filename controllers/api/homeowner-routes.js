const router = require("express").Router();
const { Homeowner } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await Homeowner.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await Homeowner.findOne({
      where: { email: req.body.email },
  
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.homeowner_id = userData.id;
      req.session.logged_in = true;
      req.session.email = userData.email;
      res.json({ homeowner: userData, message: "You are now logged in!" });
   
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
