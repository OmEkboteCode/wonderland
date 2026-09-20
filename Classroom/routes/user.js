const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.send("GET for users");
});

router.get("/users/:id", (req, res) => {
  res.send("GET for users id");
});

router.post("/users", (req, res) => {
  res.send("POST for users");
});

router.delete("/users/:id", (req, res) => {
  res.send("Delete for users");
});

module.exports = router;
