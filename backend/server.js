import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import categoryRoutes from "./routes/categoryRoutes.js";
import stepRoutes from "./routes/stepRoutes.js";
import { seedIfNeeded } from "./seed/runSeed.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoutes);
app.use("/api/steps", stepRoutes);

// connect to MongoDB Atlas
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 5050;

app.listen(PORT, async () => {
  await seedIfNeeded();
  console.log(`Server running on port ${PORT}`);
});
