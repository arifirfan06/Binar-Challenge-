const {User_game} = require("./models");

User_game.create({
  username: "avx",
  password: "avx",
  access: "player",
}).then((user_game) => {
  console.log(user_game);
});