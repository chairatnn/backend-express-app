import express from "express";
import cors from "cors";
import { router as apiRoutes } from "./routes/index.js";

export const app = express();

const corsOption = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "https://jsd-react-assessment-solution-deplo.vercel.app",
  ],
};

app.use(cors(corsOption));

app.use(express.json());

app.get("/",(req, res)=>{
  res.send("Hello JSD")
})

app.use("/api", apiRoutes);

// catch-all for 404 Not Found
app.use((req, res, next) => {
  const error = new Error(`Not found: ${req.method} ${req.originalUrl}`);
  error.name = "NotFoundError";
  error.status = 404;
  next(error);
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString(),
    stack: err.stack,
  })
});
