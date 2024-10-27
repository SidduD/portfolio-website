import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Popper,
  Fade
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info"; // Import the Info icon
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import axios from "axios";
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // State for the Popper anchor element
  const [selectedDescription, setSelectedDescription] = useState(""); // State for the selected project's description

  useEffect(() => {
    axios.get("/projects").then((response) => {
      setProjects(response.data[0]?.projects);
    });
  }, []);

  // Handle click to open the popper
  const handleClick = (event, description) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setSelectedDescription(description);
  };

  // Function to determine if the Popper is open
  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {projects.map((project) => (
        <Card
          elevation={18}
          sx={{
            m: "2rem",
            borderRadius: 4,
            width: "510px",
            height: "350px",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)"
            }
          }}
          key={project?.name}
        >
          <CardContent
            sx={{ p: "0", height: "100%", backgroundColor: "#91b5c9" }}
          >
            {project?.images[0] !== "" ? (
              <Box
                component="img"
                src={project?.images[0]}
                alt="image"
                sx={{
                  objectFit: "scale-down",
                  height: "200px",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "black"
                }}
              />
            ) : (
              <Typography>NO IMAGE</Typography>
            )}

            <Box sx={{ position: "relative" }}>
              <Box
                component="div"
                sx={{
                  p: "1rem",
                  textAlign: "center",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    mx: "1rem"
                  }}
                >
                  {project?.name}
                </Typography>
                <IconButton
                  aria-label="info"
                  onClick={(e) => handleClick(e, project?.description)}
                >
                  <InfoIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href={project?.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </IconButton>
                {project?.projectURL !== "" && (
                  <IconButton
                    component="a"
                    href={project?.projectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <OpenInNewIcon />
                  </IconButton>
                )}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  m: "1rem"
                }}
              >
                {project?.skills.map((skill) => (
                  <Typography
                    color="text.secondary"
                    sx={{
                      backgroundColor: "white",
                      p: "0.3rem",
                      borderRadius: 2
                    }}
                    key={skill}
                  >
                    {skill}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Popper for the project description */}
            <Popper open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Box
                    sx={{
                      border: "1px solid #ccc",
                      backgroundColor: "white",
                      color: "black",
                      p: 2,
                      borderRadius: 1,
                      boxShadow: 3,
                      maxWidth: "400px", // Set a maximum width for the popper
                      whiteSpace: "normal", // Allow text to wrap
                      wordWrap: "break-word" // Break words if necessary
                    }}
                  >
                    {selectedDescription}
                  </Box>
                </Fade>
              )}
            </Popper>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Projects;
