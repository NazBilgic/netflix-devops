const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Netflix backend is running 🎬");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/movies", (req, res) => {
  const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi" },
    { id: 2, title: "The Dark Knight", genre: "Action" },
    { id: 3, title: "Interstellar", genre: "Adventure" }
  ];
  res.json(movies);
});
