import { Box, Paper, Typography } from "@mui/material";
import Skills from "../ui/Skills";
import Work from "../ui/Work";

function About() {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center", my: "2rem", fontWeight: "bold" }}
        className="animate_animated animate__heartBeat"
      >
        About Me
      </Typography>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          gap: 4,
          alignItems: "top"
        }}
      >
        <Paper
          elevation={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "250px",
            borderRadius: "10%",
            maxWidth: "200px",
            mx: "auto"
          }}
        >
          <Box
            component="img"
            src="/me.JPG"
            alt="Siddharth Dhanasekar"
            sx={{
              maxWidth: "200px",
              height: "auto",
              margin: { xs: "auto", md: "0" },
              objectFit: "cover",

              borderRadius: "10%"
            }}
          />
        </Paper>

        <Box sx={{ py: 2, my: 2 }}>
          <Typography
            variant="p"
            sx={{
              lineHeight: "1.8",
              fontSize: { xs: "14px", sm: "14px", md: "20px" }
            }}
          >
            👋 I'm Siddharth Dhanasekar, a{" "}
            <Typography
              component="span"
              sx={{ color: "#0096e4", fontSize: "inherit", fontWeight: "bold" }}
            >
              Computer Engineering and Management{" "}
            </Typography>
            graduate from McMaster University with a passion for technology and
            problem-solving. I'm always eager to learn and take on new
            challenges, both in the world of software development and beyond.
          </Typography>
          <Typography
            sx={{
              mt: "1rem",
              fontSize: { xs: "14px", sm: "14px", md: "20px" },
              lineHeight: "1.8"
            }}
          >
            Outside of academics, I was a member of the McMaster Varsity
            Baseball Team ⚾, where I developed strong teamwork and leadership
            skills.
          </Typography>
        </Box>
      </Box>

      <Box>
        <Skills />
      </Box>

      <Box sx={{ mb: "10rem" }}>
        <Work />
      </Box>
    </Box>
  );
}

export default About;
