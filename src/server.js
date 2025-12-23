import express from "express";

const app = express();
const port = 3000;

// our very first API endpoint!
app.get("/", (req, res) => {
  res.send("Hello Future World!, I'm your srever.");
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});
