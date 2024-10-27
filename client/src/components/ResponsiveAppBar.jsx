import { AppBar, Box, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import { useEffect, useState } from "react";
import DrawerComp from "../components/DrawerComp";
import "animate.css";
import { useLocation, useNavigate } from "react-router-dom";
import ToggleSwitch from "../components/ToggleSwitch";

function ResponsiveAppBar() {
  const navPages = ["Home", "About", "Projects", "Contact"];
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop();

  const [value, setValue] = useState(
    navPages.findIndex(
      (page) => page.toLowerCase() === currentPage.toLowerCase()
    )
  );
  const navigate = useNavigate();

  function handleChange(e, val) {
    if (navPages[val] === "Contact") {
      const footer = document.getElementById("footer");
      footer.scrollIntoView({ behavior: "smooth" });
    } else {
      setValue(val);
      navigate(`/${navPages[val].toLowerCase()}`);
    }
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#255a77" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: "2rem",
          height: "100%"
        }}
        disableGutters
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SportsBaseballIcon
            className="animate__animated animate__bounce"
            sx={{
              mx: "0.5rem",
              fontSize: "3rem",
              color: "#e8f1f2"
            }}
          />
          <Typography
            variant="h2"
            component={"h2"}
            sx={{
              fontWeight: "bold",
              color: "#e8f1f2"
            }}
          >
            SD
          </Typography>
          <SportsBaseballIcon
            sx={{
              mx: "0.5rem",
              fontSize: "3rem",
              color: "#e8f1f2"
            }}
            className="animate__animated animate__bounce"
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            px: "1rem",
            mx: "1rem"
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#FFFFFF" // Set the indicator color here
              },
              "& .Mui-selected": {
                color: "#FFFFFF" // Selected tab text color
              }
            }}
          >
            {navPages.map((page) => (
              <Tab
                key={page}
                sx={{
                  "&.Mui-selected": {
                    color: "#fff" // Optional: change text color when selected
                  },
                  "&:not(.Mui-selected)": {
                    color: "white" // Optional: change text color when not selected
                  }
                }}
                label={page}
              />
            ))}
          </Tabs>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            px: "1rem",
            mx: "1rem"
          }}
        >
          <ToggleSwitch />
        </Box>

        <Box sx={{ display: { sm: "flex", md: "none" } }}>
          <DrawerComp navPages={navPages} setValue={setValue} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
