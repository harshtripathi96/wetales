// Social.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

import img1 from "../assets/social/about1.jpg";
import img2 from "../assets/social/about2.jpg";
import img3 from "../assets/social/about3.jpg";
import img4 from "../assets/social/about4.jpg";
import img5 from "../assets/social/about5.jpg"; // 👈 added 5th

const socialData = [
  { label: "Anniversary Invitation", link: "https://wetales.in/template?cat=anniversary-5", img: img1 },
  { label: "Baby Shower Invitation", link: "https://wetales.in/template?cat=baby-8", img: img2 },
  { label: "Birthday Invitation", link: "https://wetales.in/template?cat=social-events-7&subcat=adult-birthday-40", img: img3 },
  { label: "Pooja Invitation", link: "https://wetales.in/template?cat=social-events-7&subcat=pooja-15", img: img4 },
  { label: "Engagement Invitation", link: "https://wetales.in/template?cat=engagement-6", img: img5 },
];

const Social = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 3 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
            SOCIAL EVENTS
          </Typography>
          <Box
            sx={{
              width: "70px",
              height: "4px",
              backgroundColor: "#e91e63",
              margin: "8px auto 0",
              borderRadius: "2px",
            }}
          />
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4.7,
          }}
        >
          {socialData.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "45%", sm: "200px" },
                textAlign: "center",
              }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.label}
                  sx={{
                    width: "100%",
                    height: "auto", // 👈 keeps natural height
                    objectFit: "contain",
                    borderRadius: 2,
                    boxShadow: 3,
                    cursor: "pointer",
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                     '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 3,
                    },
                  }}
                />
              </a>
              <Typography sx={{ mt: 1, fontWeight: 500, color: "#333" }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Button */}
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <a
            href="https://wetales.in/template?cat=social-events-7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e91e63",
                color: "#fff",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#d81b60",
                },
              }}
            >
              Browse Invitation
            </Button>
          </a>
        </Box>
      </Container>
    </Box>
  );
};

export default Social;
