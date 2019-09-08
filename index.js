const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const bodyParser = require("body-parser");
require("dotenv");

const app = express();

app.use(cors());

app.listen(process.env.PORT || 5001, () => {
  console.log("Listening on 5001 ...");
});

const user = [];

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  let hashedPassword = crypto
    .createHash("sha256")
    .update(req.body.password + process.env.SALT_KEY)
    .digest("hex");
  let data = {
    email: req.body.email,
    password: hashedPassword
  };
  user.push(data);
  res.status(200).send("ok");
});
