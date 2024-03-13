const express = require("express");
const router = express.Router();
const Article = require("./../model/article");

router.get("/new", (req, res, next) => {
  res.render("articles/new", { article: {} });
});

router.get("/:id", (req, res, next) => {});

router.post("/", async (req, res, next) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });
  try {
    article = await article.save();
    res.redirect(`/articles/${article.id}`);
  } catch (e) {
    res.render("articles/new", { article: article, error: e });
  }
});
module.exports = router;
