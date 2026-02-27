const express = require("express");
const router = express.Router();
const commands = require("../data/commands");

router.get("/", (req, res) => {
  const { category, search } = req.query;
  let result = [...commands];

  if (category && category !== "All") {
    result = result.filter((c) => c.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );
  }

  const categories = ["All", ...new Set(commands.map((c) => c.category))];

  res.json({ success: true, data: result, categories, total: result.length });
});

router.get("/:name", (req, res) => {
  const command = commands.find((c) => c.name === req.params.name);
  if (!command) return res.status(404).json({ success: false, error: "Command not found" });
  res.json({ success: true, data: command });
});

module.exports = router;
