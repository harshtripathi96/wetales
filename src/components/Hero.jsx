// Hero.jsx
import React from "react";
import { Box } from "@mui/material";
import desktopImg from "../assets/hero image/Top banner desktop.png";
import tabletImg from "../assets/herotab.jpg";
import mobileImg from "../assets/heromobile.jpg";

const Hero = () => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    }}
  >
    <picture style={{ width: "100%" }}>
      {/* Mobile */}
      <source media="(max-width:600px)" srcSet={mobileImg} />
      {/* Tablet */}
      <source media="(max-width:1024px)" srcSet={tabletImg} />
      {/* Desktop */}
      <img
        src={desktopImg}
        alt="Digital Invitation"
        style={{
          width: "100%",    // full width
          height: "auto",   // keeps aspect ratio
          display: "block", // removes inline spacing
        }}
      />
    </picture>
  </Box>
);

export default Hero;
