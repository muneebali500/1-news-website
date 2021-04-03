import "dotenv/config.js";
import express from "express";
import axios from "axios";

const router = express.Router();

// GET THE ARTICLES ON FIRST LOAD
router.get(`/`, async (req, res) => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`
  );
  res.render(`news`, { articles: response.data.articles });
});

// GET THE ARTICLES BY SEARCH VALUE
router.post(`/`, async (req, res) => {
  const search = req.body.search;

  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${search.trim()}&apiKey=${
      process.env.NEWS_API_KEY
    }`
  );
  res.render(`news`, { articles: response.data.articles });
});

export default router;
