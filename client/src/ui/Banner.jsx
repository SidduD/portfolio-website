import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Typewriter from "../components/Typewriter";
import { IoCodeSharp, IoCodeSlash } from "react-icons/io5";

function Banner() {
  const [text, setText] = useState("");
  return (
    <Box
      sx={{ mt: "5rem", textAlign: "center", fontFamily: "Source Code Pro" }}
    >
      <Box sx={{ fontSize: "2rem" }}>
        <IoCodeSharp />
      </Box>
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontWeight: "bold", my: "1rem" }}
      >
        HEY!
      </Typography>

      <Typography variant="h3">My name is Siddharth Dhanasekar</Typography>
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0096e4",
          my: "2rem"
        }}
      >
        <Typewriter text={text} setText={setText} />
        <Typography
          component="span"
          sx={{
            display: "inline-block",
            borderLeft: "2px solid",
            height: "2rem",
            animation: "pulse 1.5s infinite",
            color: "#0096e4"
          }}
        ></Typography>
      </Typography>
      <Box sx={{ fontSize: "2rem" }}>
        <IoCodeSlash />
      </Box>
    </Box>
  );
}

export default Banner;
