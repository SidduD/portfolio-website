import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  projects: [
    {
      name: { type: String },
      images: [{ type: String }],
      githubURL: { type: String },
      projectURL: { type: String },
      skills: [{ type: String }],
      description: { type: String }
    }
  ]
});

export const Projects = mongoose.model("Projects", ProjectSchema);
