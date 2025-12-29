// import express from "express";
import { connect } from "mongoose";
import { app } from "./app.js";
import { connectDB } from "./conflig/mongdb.js";

// const app = express();
const port = 3000;

try {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} catch (error) {
  console.error("Started failed 🚫", error);
  process.exit(1);
}
