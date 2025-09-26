import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import sampleImage from "../assets/map.jpeg"; // image path

const OnlyimgSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 👈 true for mobile

  return (
    <Box sx={{ py: 0, backgroundColor: "#fff" }}>
      {isMobile ? (
        // 👇 MOBILE VIEW
        <Box
          component="img"
          src={sampleImage}
          alt="Showcase"
          sx={{
            width: "100%",     // full width
            height: "200px",   // control mobile height
            objectFit: "cover",
            display: "block",  // removes inline gap
          }}
        />
      ) : (
        // 👇 DESKTOP/TABLET VIEW
        <Box
          component="img"
          src={sampleImage}
          alt="Showcase"
          sx={{
            width: "100%",     // full width
            height: "auto",    // keep aspect ratio
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </Box>
  );
};

export default OnlyimgSection;
