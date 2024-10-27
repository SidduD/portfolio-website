import { Box } from "@mui/material";
import Contact from "../components/Contact";
import { useToggle } from "../contexts/ToggleContext";
function Footer() {
  return (
    <Box id="footer" sx={{ backgroundColor: "#255a77" }}>
      <Contact />
    </Box>
  );
}

export default Footer;
