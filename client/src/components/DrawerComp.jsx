import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

function DrawerComp({ navPages, setValue }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const icon = [
    <HomeIcon />,
    <PersonIcon />,
    <CodeIcon />,
    <ContactMailIcon />
  ];

  const navigate = useNavigate();

  function handleClick(page) {
    setOpenDrawer(!openDrawer);

    if (page === "Contact") {
      const footer = document.getElementById("footer");
      footer.scrollIntoView({ behavior: "smooth" });
    } else {
      setValue(navPages.indexOf(page));
      navigate(`/${page.toLowerCase()}`);
    }
  }
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <Box sx={{ display: "flex", mb: "-2rem", mt: "1rem", mr: "1rem" }}>
          <Box>
            <ToggleSwitch />
          </Box>
          <Button
            sx={{ ml: "auto", color: "gray" }}
            onClick={() => setOpenDrawer(false)}
          >
            X
          </Button>
        </Box>
        <List sx={{ mx: "auto" }}>
          {navPages.map((page, index) => (
            <ListItemButton
              key={page}
              onClick={() => handleClick(page)}
              sx={{ fontSize: "1rem" }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  alignItems: "end",

                  gap: 2
                }}
              >
                <Box>{icon[index]}</Box>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
}

export default DrawerComp;
