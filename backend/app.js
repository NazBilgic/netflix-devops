const express = require("express");
const cors = require("cors");
require("dotenv").config();

const client = require("prom-client"); // Prometheus
const collectDefaultMetrics = client.collectDefaultMetrics;
const register = client.register;

// Collect default system metrics
collectDefaultMetrics();

// Custom 500 error counter
const error500Counter = new client.Counter({
  name: "http_500_errors_total",
  help: "Total number of HTTP 500 errors"
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.send("Netflix backend is running 🎬");
});

// Movies endpoint - returns S
