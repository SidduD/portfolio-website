import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";
import { Skills } from "./model/skillsModel.js";

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB Connected");
    return Skills.deleteMany({});
  })
  .then(() => {
    const skill = new Skills({
      programmingSkills: [
        {
          name: "C",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
        },
        {
          name: "Python",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        },
        {
          name: "Java",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        },
        {
          name: "JavaScript",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
          name: "HTML5",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
          name: "CSS3",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        {
          name: "Tailwind CSS",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        },
        {
          name: "MATLAB",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"
        }
      ],
      technologySkills: [
        {
          name: "React",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
          name: "Redux",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
        },
        {
          name: "Node.js",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        {
          name: "Express.js",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        },
        {
          name: "Django",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
        },
        {
          name: "SQLite",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
        },
        {
          name: "MongoDB",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
        },
        {
          name: "Mongoose",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
        },
        {
          name: "Postman",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
        },

        {
          name: "MaterialUI",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
        },

        {
          name: "Cypress",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg"
        },
        {
          name: "Git",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        }
      ],
      hardwareSkills: [
        {
          name: "Raspberry Pi",
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg"
        }
      ]
    });
    return skill.save();
  })
  .then(() => {
    console.log("Skills added successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Error saing skill", err);
    mongoose.connection.close();
  });
