import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

import { Box, Container } from "@mui/material";

function AppLayout({ toggleTheme }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto"
      }}
    >
      <Header toggleTheme={toggleTheme} />
      <Box>
        <Container>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default AppLayout;
