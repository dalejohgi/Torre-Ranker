#!/usr/bin/node
/**
 * Ranker API for Torre
 * 
 */
const history = require('connect-history-api-fallback');
const cors = require("cors");
const express = require("express");
const { rankUser } = require("./ranker");
const { resolve } = require('path')


const app = express();
const staticFileMiddleware = express.static(resolve(__dirname, 'frontend'));
const port = process.env.PORT || 3000;

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

// 1st call for unredirected requests 
app.use(staticFileMiddleware);

// Support history api 
app.use("/", history({
  index: '/frontend/index.html'
}));

app.listen(port, () => {
  console.log("Initializing on port 3000");
 });
 