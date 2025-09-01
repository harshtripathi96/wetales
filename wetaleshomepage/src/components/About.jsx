// About.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

import img1 from "../assets/wedding/about1.jpg";
import img2 from "../assets/wedding/about2.jpg";
import img3 from "../assets/wedding/about3.jpg";
import img4 from "../assets/wedding/about4.jpg";
import img5 from "../assets/wedding/about5.jpg"; // 👈 5th image

const aboutData = [
  { label: "Logo", link: "https://wetales.in/template?cat=wedding-4", img: img1 },
  { label: "Save The Date Card", link: "https://wetales.in/template?cat=wedding-4&subcat=save-the-date-4", img: img2 },
  { label: "Wedding", link: "https://wetales.in/template?cat=4", img: img3 },
  { label: "Wardrobe", link: "https://wetales.in/template?cat=wedding-4&subcat=wardrobe-6", img: img4 },
  { label: "Stationery", link: "https://wetales.in/template?cat=wedding-4", img: img5 },
];

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 3 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
            WEDDING COLLECTION
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
            gap: 3,
            
          }}
        >
          {aboutData.map((item, index) => (
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
                    height: "auto",
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
            href="http://wetales.in/template"
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

export default About;
