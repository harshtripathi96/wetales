// Hero.jsx
import React from "react";
import { Box } from "@mui/material";
import desktopImg from "../assets/hero.jpg";
import tabletImg from "../assets/herotab.jpg";
import mobileImg from "../assets/heromobile.jpg";

const Hero = () => (
  <Box
    sx={{
      width: "100%",
      height: {
        xs: "auto",   // Mobile
        sm: "90vh",   // Tablet
        md: "100vh",  // Desktop
      },
      display: "block",
      overflow: "hidden",
    }}
  >
    <picture>
      {/* Mobile */}
      <source media="(max-width:600px)" srcSet={mobileImg} />
      {/* Tablet */}
      <source media="(max-width:1024px)" srcSet={tabletImg} />
      {/* Default Desktop */}
      <img
        src={desktopImg}
        alt="Digital Invitation"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </picture>
  </Box>
);

export default Hero;
