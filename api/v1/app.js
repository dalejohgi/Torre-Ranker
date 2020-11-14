#!/usr/bin/node
/**
 * Ranker API for Torre
 * 
 */
const cors = require("cors");
const express = require("express");
const { rankUser } = require("./ranker");

const app = express();

app.use(cors({ origin: true }));

// Get user ranking
app.get("/api/v1/:username", (req, res) => {
  (async () => {
    try {
      const user = await rankUser(req.params.username);
      res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
});

app.listen(3000, () => {
  console.log("Initializing on port 3000");
 });
 