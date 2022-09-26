const {User_game} = require("../models");
const passport = require("../lib/passport");

exports.register = (req, res) => {
  // res.end("Halaman tidak tersedia");
  res.render("auth/register", {title: "Registration"});
};

// Tambahan untuk Authorize
// function format(user) {
//   const { id, username, access } = user;
//   return {
//     id,
//     username,
//     access,
//     accessToken: user.generateToken(),
//   };
// }


exports.registerProcess = (req, res, next) => {
  // Kita panggil static method register yang sudah kita buat tadi
  User_game.register(req.body)
    .then(() => {
      res.redirect("/login");
    })
    .catch((err) => next(err));
  // res.end("Processing...");
};

exports.login = (req, res) => {
  res.render("auth/login", {title: "Login User"});
};

// Percobaan Authorize
// exports.loginProcess = (req, res) => {
//   User_game.authenticate(req.body).then((user) => {
//     res.json(format(user));
//   });
// };


// Dikomentari dulu jika mau mencoba Authorize
exports.loginProcess = passport.authenticate("local", {
  successRedirect: "/play",
  failureRedirect: "/login",
  // Untuk mengaktifkan express flash
  failureFlash: true,
})

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};

