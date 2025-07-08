const express = require("express");
const cors = require("cors");
require("dotenv").config();

const client = require("prom-client"); // Prometheus
const collectDefaultMetrics = client.collectDefaultMetrics;
const register = client.register;

collectDefaultMetrics();


const error500Counter = new client.Counter({
  name: "http_500_errors_total",
  help: "Total number of HTTP 500 errors"
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Netflix backend is running 🎬");
});

app.get("/movies", (req, res) => {
  const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi" },
    { id: 2, title: "The Dark Knight", genre: "Action" },
    { id: 3, title: "Interstellar", genre: "Adventure" }
  ];
  res.json(movies);
});

// Simulate a 500 error for testing
app.get("/error", (req, res) => {
  error500Counter.inc(); // Sayaç artar
  res.status(500).send("Something went wrong!");
});

// Prometheus metrics endpoint
app.get("/metrics", async (req, res) => {
  try {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
  } catch (ex) {
    res.status(500).end(ex);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
