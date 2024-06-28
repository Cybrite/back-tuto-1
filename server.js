import express from "express";
const app = express();



app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
    {
      id: 2,
      setup: "What do you call a bear with no teeth?",
      punchline: "A gummy bear!",
    },
    {
      id: 3,
      setup: "Why did the bicycle fall over?",
      punchline: "Because it was two-tired!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
