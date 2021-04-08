import "dotenv/config.js";
import express from "express";
import axios from "axios";

const router = express.Router();

// GET THE ARTICLES ON FIRST LOAD
router.get(`/`, async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.render(`news`, { articles: response.data.articles });
  } catch (err) {
    if (err) {
      res.render(`news`, { error: err, articles: null });
    }
  }
});

// GET THE ARTICLES BY SEARCH VALUE
router.post(`/`, async (req, res) => {
  const search = req.body.search;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${search.trim()}&apiKey=${
        process.env.NEWS_API_KEY
      }`
    );
    res.render(`news`, { articles: response.data.articles });
  } catch (err) {
    if (err) {
      res.render(`news`, { error: err, articles: null });
    }
  }
});

export default router;
