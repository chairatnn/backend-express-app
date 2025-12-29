import express from "express";
import cors from "cors";
import { router as apiRoutes } from "./routes/index.js";

export const app = express();

const corsOption = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "https://jsd-react-assessment-solution-deplo.vercel.app/",
  ],
};

app.use(cors(corsOption));

app.use(express.json());

app.use("/api", apiRoutes);
