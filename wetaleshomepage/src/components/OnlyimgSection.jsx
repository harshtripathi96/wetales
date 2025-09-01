import React from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import sampleImage from "../assets/map.jpeg"; // image path

const OnlyimgSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 👈 true for mobile

  return (
    <Box sx={{ py: 6, backgroundColor: "#fff" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {isMobile ? (
          // 👇 MOBILE VIEW
          <Box
            component="img"
            src={sampleImage}
            alt="Showcase"
            sx={{
              width: "100%",
              height: "160px", // smaller height for mobile
              borderRadius: 2,
              boxShadow: 1,
              objectFit: "cover",
            }}
          />
        ) : (
          // 👇 DESKTOP VIEW
          <Box
            component="img"
            src={sampleImage}
            alt="Showcase"
            sx={{
              width: "100%",
              height: "465px",
              maxWidth: "1170px",
              borderRadius: 2,
              boxShadow: 3,
              objectFit: "cover",
            }}
          />
        )}
      </Container>
    </Box>
  );
};

export default OnlyimgSection;
