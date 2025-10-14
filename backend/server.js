import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import tasksRouter from "./routes/tasks.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// quick debug
console.log("Node env:", process.env.NODE_ENV || "development");
console.log("Looking for MONGO_URI in .env...");

// Check MONGO_URI presence
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error("❌ MONGO_URI not set in .env - create backend/.env with your Atlas URI");
  process.exit(1);
}

// Connect to MongoDB
mongoose.set("strictQuery", true);
mongoose.connect(uri, { })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Mount routes
app.use("/api/tasks", tasksRouter);

// Stats endpoint
app.get("/api/stats", async (req, res) => {
  try {
    const Task = (await import("./models/Task.js")).default;
    const tasks = await Task.find();
    const completed = tasks.filter(t => t.completed);
    const totalXP = completed.reduce((s, t) => s + (t.xp || 0), 0);
    const level = Math.floor(totalXP / 100) + 1;
    res.json({
      totalTasks: tasks.length,
      completedTasks: completed.length,
      totalXP,
      level,
      xpTowardsNext: totalXP % 100
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Simple test route
app.get("/api/test", (req, res) => res.json({ message: "Server is up" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
