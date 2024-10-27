import mongoose from "mongoose";

const SkillsSchema = new mongoose.Schema({
  programmingSkills: [
    {
      name: { type: String },
      url: { type: String }
    }
  ],
  technologySkills: [
    {
      name: { type: String },
      url: { type: String }
    }
  ],
  hardwareSkills: [
    {
      name: { type: String },
      url: { type: String }
    }
  ]
});

export const Skills = mongoose.model("Skills", SkillsSchema);
