const express = require("express");
const router = express.Router();
const { owners, partners, features } = require("../data/content");

router.get("/owners", (req, res) => {
  res.json({ success: true, data: owners });
});

router.get("/partners", (req, res) => {
  const { type } = req.query;
  const result = type ? partners.filter((p) => p.type === type) : partners;
  res.json({ success: true, data: result });
});

router.get("/features", (req, res) => {
  const { category } = req.query;
  const result = category ? features.filter((f) => f.category === category) : features;
  res.json({ success: true, data: result });
});

module.exports = router;
