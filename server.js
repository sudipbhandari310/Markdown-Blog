const express = require("express");
const app = express();
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
app.set("view engine", "ejs");
mongoose.connect(
  "mongodb+srv://sudipbhandari310:test123@cluster0.begqez6.mongodb.net/"
);
app.use(express.urlencoded({ extended: false }));
app.use("/articles", articleRouter);
app.get("/", (req, res, next) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test Description",
    },
    {
      title: "Test Article 2",
      createdAt: new Date(),
      description: "Test Description",
    },
  ];
  res.render("articles/index", { articles: articles });
});
app.listen(5000);
