const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 INI YANG KAMU KURANG
app.use(express.static("public"));

// API produk
app.get("/produk", (req, res) => {
  const sql = "SELECT * FROM produk";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: "Gagal mengambil data"
      });
    } else {
      res.json(result);
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});