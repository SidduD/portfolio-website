import { Box, Button, ButtonGroup, Grid2, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import vhdlImg from "../assets/vhdl.svg";
import verilogImg from "../assets/verilog.svg";
import Tilt from "react-parallax-tilt";
import { useToggle } from "../contexts/ToggleContext";

function Skills() {
  const [tab, setTab] = useState("programming");
  const [skills, setSkills] = useState();
  const { isDarkMode } = useToggle();
  const hardwareSkills = [
    { name: "VHDL", url: vhdlImg },
    {
      name: "Verilog",
      url: verilogImg
    }
  ];

  useEffect(() => {
    axios.get("/skills").then((response) => {
      setSkills(response.data[0]);
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "#333333" : "#e5f6ff",
        mx: "-10rem",
        py: "5rem",
        mt: "1rem",
        overflowX: "clip"
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{ textAlign: "center", mt: "1rem", mb: "2rem", fontWeight: "bold" }}
      >
        Skills
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup sx={{}}>
          <Button
            variant={`${tab === "programming" ? "contained" : "outlined"}`}
            onClick={() => setTab("programming")}
          >
            Programming
          </Button>
          <Button
            variant={`${tab === "technologies" ? "contained" : "outlined"}`}
            onClick={() => setTab("technologies")}
          >
            Technologies
          </Button>
          <Button
            variant={`${tab === "hardware" ? "contained" : "outlined"}`}
            onClick={() => setTab("hardware")}
          >
            Hardware
          </Button>
        </ButtonGroup>
      </Box>
      {tab === "programming" && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid2 container spacing={2} justifyContent="center">
            {skills?.programmingSkills.map((prgSkill) => (
              <Grid2 xs={6} sm={4} md={2} key={prgSkill.name}>
                <Box
                  sx={{
                    display: { sm: "grid", md: "inline-block" },
                    mx: "1rem",
                    my: "2rem"
                  }}
                >
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={35}
                    transitionSpeed={1000} // Adjust speed for smoothness
                    perspective={1000} // Increase perspective for depth
                    scale={1.05} // Slightly scale the image on tilt
                    tiltEnable={true}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "center"
                      }}
                    >
                      <Box
                        component="img"
                        src={prgSkill.url}
                        sx={{
                          height: { xs: "40px", sm: "60px", md: "80px" },
                          width: { xs: "40px", sm: "60px", md: "80px" }
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: { xs: "12px", sm: "12px", md: "16px" }
                        }}
                      >
                        {prgSkill.name}
                      </Typography>
                    </Box>
                  </Tilt>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      )}
      {tab === "technologies" && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid2 container spacing={2} justifyContent="center">
            {skills?.technologySkills.map((techSkill) => (
              <Grid2 xs={6} sm={4} md={2} key={techSkill.name}>
                <Box
                  sx={{
                    display: { sm: "grid", md: "inline-block" },
                    mx: "1rem",
                    my: "2rem"
                  }}
                >
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={35}
                    transitionSpeed={1000} // Adjust speed for smoothness
                    perspective={1000} // Increase perspective for depth
                    scale={1.05} // Slightly scale the image on tilt
                    tiltEnable={true}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "center"
                      }}
                    >
                      <Box
                        component="img"
                        src={techSkill.url}
                        sx={{
                          height: { xs: "40px", sm: "60px", md: "80px" },
                          width: { xs: "40px", sm: "60px", md: "80px" }
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", sm: "12px", md: "16px" }
                        }}
                      >
                        {techSkill.name}
                      </Typography>
                    </Box>
                  </Tilt>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      )}
      {tab === "hardware" && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid2 container spacing={2} justifyContent="center">
            {hardwareSkills.map((hrdSkill) => (
              <Grid2 xs={6} sm={4} md={2} key={hrdSkill.name}>
                <Box
                  sx={{
                    display: { sm: "grid", md: "inline-block" },
                    mx: "1rem",
                    my: "2rem"
                  }}
                >
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={55}
                    transitionSpeed={1000} // Adjust speed for smoothness
                    perspective={1000} // Increase perspective for depth
                    scale={1.05} // Slightly scale the image on tilt
                    tiltEnable={true}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "center"
                      }}
                    >
                      <Box
                        component="img"
                        src={hrdSkill.url}
                        sx={{
                          height: { xs: "40px", sm: "60px", md: "80px" },
                          width: { xs: "40px", sm: "60px", md: "80px" }
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", sm: "12px", md: "16px" }
                        }}
                      >
                        {hrdSkill.name}
                      </Typography>
                    </Box>
                  </Tilt>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      )}
    </Box>
  );
}

export default Skills;
