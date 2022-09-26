const {User_game} = require("../models");
const passport = require("../lib/passport");

// Get all User Game
exports.index = (req, res) => {
  // res.end("Selamat bermain");
  User_game.findAll().then((users) => {
    res.render("game", {
      title: "User Data",
      users,
    });
  });
};

// Menampilkan form tambah user
exports.create = (req, res) => {
  const title = "User Form";
  res.render("game/create", {title});
};

// Proses tambah user
exports.createProcess = (req, res) => {
  User_game.create({
    username: req.body.username,
    password: req.body.password,
    access: req.body.access,
  }).then((user_game) => {
    res.render("game/created", {title: "User page"});
  });
};

exports.play = (req, res) => {
  res.render("play", req.user.dataValues);
}

exports.wait = (req, res) => {
  const title = "Game Page";
  res.render("game/waiting", {title});
};

exports.playing = (req, res) => {
  res.render("game/playing", req.user.dataValues);
};

// Delete an user
exports.delete = (req, res) => {
  // res.end("Deleting...");
  User_game.destroy({
    where: {id: req.params.id},
  }).then((user_game) => {
    res.render("game/deleted", {title: "Admin Page"});
  });
};


