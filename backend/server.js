require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });
app.use("/api/", limiter);

app.use("/api/bot", require("./routes/bot"));
app.use("/api/commands", require("./routes/commands"));
app.use("/api", require("./routes/content"));

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString(), uptime: Math.floor(process.uptime()) });
});

app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`DELTA MUSIC API running on port ${PORT}`));
