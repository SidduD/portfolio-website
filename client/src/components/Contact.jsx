import {
  Box,
  Button,
  FormControl,
  Input,
  Paper,
  TextareaAutosize,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useToggle } from "../contexts/ToggleContext";
import SendIcon from "@mui/icons-material/Send";
import contactImg from "../assets/contact-img.svg";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const { isDarkMode } = useToggle();
  function onFormUpdate(category, value) {
    setFormDetails({ ...formDetails, [category]: value });
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: 3,
        alignItems: "center",
        m: "2rem"
      }}
    >
      <Box>
        <img
          src={contactImg}
          alt="contact"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box>
        <Box>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: "center",
              color: "white",
              fontSize: { xs: "2rem", sm: "3rem" },
              mb: "0.75rem"
            }}
          >
            Get In Touch
          </Typography>
        </Box>
        <Paper
          elevation={12}
          sx={{
            p: "2rem",
            backgroundColor: "#ceeeff",
            color: "black"
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr", md: "1fr 1fr" },
              gap: 2
            }}
          >
            <FormControl>
              <Typography variant="h6">First Name</Typography>
              <Input
                id="firstName"
                type="text"
                value={formDetails.firstName}
                placeholder="John"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
                sx={{
                  color: "black"
                }}
              />
            </FormControl>

            <FormControl>
              <Typography variant="h6">Last Name</Typography>
              <Input
                id="lastName"
                type="text"
                value={formDetails.lastName}
                placeholder="Doe"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
                sx={{
                  color: "black"
                }}
              />
            </FormControl>
          </Box>
          <Box sx={{ mt: "1rem" }}>
            <FormControl fullWidth sx={{ display: "block" }}>
              <Typography variant="h6">Email</Typography>
              <Input
                id="email"
                type="email"
                value={formDetails.email}
                placeholder="johndoe@example.com"
                onChange={(e) => onFormUpdate("email", e.target.value)}
                sx={{ width: "100%", color: "black" }}
              />
            </FormControl>
          </Box>
          <Box sx={{ mt: "1rem" }}>
            <Typography variant="h6">Message</Typography>
            <TextareaAutosize
              id="message"
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
              style={{
                padding: "1rem",
                width: "100%",
                height: "5vw",
                border: "1px solid #ccc",
                borderRadius: "4px",
                color: "black"
              }}
            />
          </Box>

          <Box sx={{ textAlign: "center", mt: "1rem" }}>
            <Button
              variant="contained"
              sx={{ width: "100%", fontSize: "1.2rem" }}
            >
              Send
              <SendIcon sx={{ ml: "0.5rem", fontSize: "1rem" }} />
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Contact;
