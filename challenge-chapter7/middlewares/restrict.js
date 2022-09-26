// Tambahan untuk Authorize
const passport = require("../lib/passport");

module.exports = (req, res, next) => {
  // Bila request berasal dari user yang terautentikasi,
  // maka kita akan lanjut menjalankan handler berikutnya
  if (req.isAuthenticated()) return next();
  // Bila tidak, kita akan redirect ke halaman login
  res.redirect("/login");
};


// Tambahan untuk Authorize
// module.exports = passport.authenticate("jwt", {
//   session: false,
// });
