const express = require('express');
const router = express.Router();
const user = require("../controllers/userController");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/users", user.index);
// router.get("/articles", page.articles);

module.exports = router;
