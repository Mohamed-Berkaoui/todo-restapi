var jwt = require("jsonwebtoken");

function generateToken(id) {
  const token = jwt.sign({ user: id }, "0be6be2cfd30376e9253a6a2aec41c32", {
    expiresIn: "2h",
  });
  return token;
}


module.exports=generateToken