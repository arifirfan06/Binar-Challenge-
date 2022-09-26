const express = require('express');
const router = express.Router();
const pagesRouter = require("./pages");
const userRouter = require("./users");
const authRouter = require("./auth");
const gameRouter = require("./game");

/* GET home page. */
router.get('/', function(req, res, next) {
  const title = "Challenge Chapter 7",
    subtitle = "Welcome to my website";
  res.render('index', { title, subtitle });
});

router.use(pagesRouter);
router.use(userRouter);
router.use(authRouter);
router.use(gameRouter);

module.exports = router;
