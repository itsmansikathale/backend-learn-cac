require("dotenv").config;
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello backend");
});

app.get("/git", (req, res) => {
  res.send("Hello git");
});

app.get("/login", (req, res) => {
  res.send("<h2>Hello Login User</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${port}`);
});
