import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Box, IconButton } from "@mui/material";
import { useToggle } from "../contexts/ToggleContext";

function SocialLinks() {
  const { isDarkMode } = useToggle();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        my: "5rem"
      }}
    >
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/dhanasekars/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon
          className="hvr-float-shadow "
          sx={{ fontSize: "4rem", color: "#0077B5" }}
        />
      </IconButton>
      <IconButton
        component="a"
        href="https://github.com/SidduD"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon
          className="hvr-float-shadow"
          sx={{ fontSize: "4rem", color: isDarkMode ? "white" : "" }}
        />
      </IconButton>

      <IconButton
        component="a"
        href="mailto:dhanass@mcmaster.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon
          className="hvr-float-shadow"
          sx={{ fontSize: "4rem", color: "#D14836" }}
        />
      </IconButton>
    </Box>
  );
}

export default SocialLinks;
