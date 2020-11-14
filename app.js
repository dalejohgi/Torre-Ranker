/**
 * API Torre App
 * 
 */
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors({ origin: true }));

// Get user ranking
app.get("/api/v1/:username", (req, res) => {
  
};

app.listen(3000, () => {
  console.log("Initializing on port 3000");
 });