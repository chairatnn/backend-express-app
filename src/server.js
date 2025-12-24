// import express from "express";
import { app } from "./app.js";

// const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
