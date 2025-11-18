const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/", (req, res) => {
  res.send("Add path '/api/transform' to use the API");
});

app.post("/api/transform", (req, res) => {
  const { sentence } = req.body;

  if (!sentence || typeof sentence !== "string" || !sentence.trim()) {
    return res
      .status(400)
      .json({ error: "Invalid input, Please provide a valid input" });
  }

  const words = sentence.split(/\s+/);
  const uniqueWords = [
    ...new Set(words.map((word) => word.toLocaleLowerCase())),
  ];
  const reversedSentence = words.reverse().join(" ");

  res.json({
    word_count: words.length,
    unique_words: uniqueWords,
    reversed_sentense: reversedSentence,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
