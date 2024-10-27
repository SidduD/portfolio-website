import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import { Skills } from "./model/skillsModel.js";
import { Projects } from "./model/projectsModel.js";

const app = express();

//Middleware to parse JSON requests
app.use(express.json());

//CORS middleware config
const corsOptions = {
  origin: ["http://localhost:5173", "https://siddudhanasekar.vercel.app/"], // Specify your allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type"] // Allowed headers
};

//Cors middleware
app.use(cors(corsOptions));

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`App is listenting on port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/api/skills", async (req, res) => {
  mongoose.connect(mongoDBURL);
  try {
    const skills = await Skills.find({});
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ error: "Error fetching skills" });
  }
});

app.get("/api/projects", async (req, res) => {
  mongoose.connect(mongoDBURL);
  try {
    const projects = await Projects.find({});
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Error fetching projects" });
  }
});
