import { Box, Divider, Grid2, Typography } from "@mui/material";

function Work() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h4"
        sx={{ textAlign: "center", mt: "4rem", mb: "1rem", fontWeight: "bold" }}
      >
        Work
      </Typography>

      <Box
        sx={{
          display: { md: "block", lg: "flex" },
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#6ab8d3"
        }}
      >
        <Box
          component="img"
          src="/verto.jpg"
          sx={{
            height: { xs: "100px", sm: "150px", md: "200px", lg: "250px" },
            width: { xs: "400px", sm: "500px", md: "600px", lg: "250px" },
            objectFit: "scale-down",
            mx: "auto", // Center the image horizontally on small screens
            my: { xs: "1rem", sm: "1rem", md: "1rem", lg: "0" }, // Add bottom margin for small screens
            backgroundColor: "white",
            display: { xs: "1rem", sm: "block", md: "block" },
            borderRadius: { xs: "10px", sm: "10px", md: "10px", lg: "0" }
          }}
        />

        <Grid2 sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              color: "white",
              px: "1rem",
              pt: "0.5rem",

              display: { md: "block", lg: "flex" },
              justifyContent: "space-between",
              flexGrow: 1
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Junior QA Automation Engineer{" "}
              </Typography>
              <Typography variant="h6" sx={{}}>
                Verto Health
              </Typography>
            </Box>
            <Box>
              <Typography variant="h7">May 2022 - Aug 2022</Typography>
            </Box>
          </Box>
          <Divider
            variant="middle"
            sx={{
              display: "block",
              backgroundColor: "gray",
              height: "5px",
              mt: "0.4rem"
            }}
          />
          <Box sx={{ pt: "0.8rem", px: "1rem" }}>
            <Typography sx={{ mb: "0.5rem", fontSize: "15px", color: "white" }}>
              Developed, wrote and ran automated E2E testing scripts (POM
              format) using Cypress framework, resulting in a 50% reduction in
              manual testing time and a 30% increase in test coverage
            </Typography>
            <Typography sx={{ mb: "0.5rem", fontSize: "15px", color: "white" }}>
              Worked closely with the product team and the development team to
              implement use case scenario testing
            </Typography>
            <Typography sx={{ mb: "0.5rem", fontSize: "15px", color: "white" }}>
              Utilized JIRA for issue tracking and bug reporting, enabling the
              QA team to raise and prioritize issues effectively, leading to a
              25% increase in the number of issues resolved within sprint
              deadlines
            </Typography>
          </Box>
        </Grid2>
      </Box>
    </Box>
  );
}

export default Work;
