const express = require("express");
const router = express.Router();
const botInfo = require("../data/bot");

router.get("/", (req, res) => {
  res.json({ success: true, data: botInfo });
});

module.exports = router;
