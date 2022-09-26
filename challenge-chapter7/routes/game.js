const express = require('express');
const router = express.Router();
const game = require("../controllers/gameController");

router.get("/game", game.index);
router.get("/userCreate", game.create);
router.post("/userCreate", game.createProcess);

// Middleware
const restrict = require("../middlewares/restrict");
router.get("/", restrict, (req, res) => res.render("index"));

// Percobaan Authorize
// router.get("/api/v1/auth/whoami", restrict, game.play);
// =====================================================

router.get("/play", restrict, game.play);
router.get("/gameWait", game.wait);
router.get("/playing", game.playing);
router.get("/userDelete/(:id)", game.delete);

module.exports = router;
