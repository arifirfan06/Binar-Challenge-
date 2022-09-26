const {Article} = require("./models");

Article.create({
  title: "SQL",
  author: "John",
  body: "Mari belajar SQL",
  approved: true
}).then((article) => {
  console.log(article);
});