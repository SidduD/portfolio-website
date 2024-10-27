import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";
import { Projects } from "./model/projectsModel.js";

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB Connected");
    return Projects.deleteMany({});
  })
  .then(() => {
    const project = new Projects({
      projects: [
        {
          name: "Spotify Music Controller",
          images: [
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/musicControllerApp.jpg",
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/musicControllerAppRoom.jpg",
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/musicControllerAppCreate.jpg",
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/musicControllerAppJoin.jpg"
          ],
          githubURL: "https://github.com/SidduD/spotfiy-music-controller",
          projectURL: "",
          skills: [
            "React",
            "MaterialUI",
            "Django",
            "SQLite",
            "Spotify Web Api"
          ],
          description:
            "A collaborative Spotify music controller where a host creates a room, and guests can join to play, pause, or skip songs in real time."
        },
        {
          name: "Airbnb Clone - MyBooking App",
          images: [
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/bookingApp.jpg",
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/bookingApp(2).jpg",
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/bookingApp(3).jpg",
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/bookingApp(4).jpg",
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/bookingApp(5).jpg",
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/bookingApp(6).jpg"
          ],
          githubURL: "https://github.com/SidduD/my-booking-app",
          projectURL: "https://siddu-mybookingapp.vercel.app/",
          skills: ["React", "Tailwind CSS", "Express.js", "Node.js", "MongoDB"],
          description:
            "An Airbnb-inspired app that allows users to list their accommodations, browse available listings, and book stays, with features for managing bookings and detailed property information."
        },
        {
          name: "Autonomous Vehicle Obstacle Avoidance System",
          images: [
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/autonomous.jpg"
          ],
          githubURL:
            "https://github.com/SidduD/Autonomous-Vehicle-Obstacle-Avoidance-System",
          projectURL: "",
          skills: ["C++", "Python", "NuttX RTOS", "MAVLink", "PX4-Autopilot"],
          description:
            "An autonomous vehicle project that leverages PX4 and NuttX on the FMUK66 to enable obstacle avoidance using camera and ultrasonic sensors. The system integrates a Raspberry Pi 4 as a companion computer for advanced sensor processing and communicates with the flight management unit (FMU) via MAVLink and uORB messaging."
        },
        {
          name: "FitReflect",
          images: [
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/fitReflect.jpg"
          ],
          githubURL: "https://github.com/SidduD/FitReflect-ComputerVisionandML",
          projectURL: "",
          skills: [
            "Python",
            "Mediapipe",
            "Scikit-Learn",
            "Socket.IO",
            "MagicMirror2"
          ],
          description:
            "A real-time weightlifting tracker using computer vision, machine learning, and a smart mirror interface to provide continuous feedback for safe and effective workouts"
        },
        {
          name: "Portfolio Website",
          images: [
            "https://siddu-portfolio.s3.us-east-2.amazonaws.com/portfolioWebsite.jpg"
          ],
          githubURL: "https://github.com/SidduD/portfolio-website",
          projectURL: "",
          skills: ["React", "MaterialUI", "Node.js", "Express.js", "MongoDB"],
          description:
            "This portfolio website showcases my skills and projects as a software engineer, featuring sections for an about me, work experience, and key projects. Designed with a modern interface, it highlights my expertise in web development and programming"
        }
      ]
    });
    return project.save();
  })
  .then(() => {
    console.log("Projects added successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Error saving projects", err);
    mongoose.connection.close();
  });
