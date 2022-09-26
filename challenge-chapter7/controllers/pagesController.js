const {Article} = require("../models");

// exports.home = (req, res) => {
//   const title = "Hello World",
//     subtitle = "Welcome to my website";

//   res.render("index", {title, subtitle})
// };

exports.about = (req, res) => {
  res.render("about", {title: "About"});
};


exports.articles = (req, res) => {
  Article.findAll().then((articles) => {
    res.render("articles", {title: "Articles", articles});
  });
};