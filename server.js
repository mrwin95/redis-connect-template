const express = require("express");
const app = express();

const initRedis = require("./init.redis");
initRedis.initRedis();
app.get("/", (req, res) => {
  res.send("Welcome redis");
});

app.listen(3012, () => {
  console.log("server started");
});
