// Clients.jsx
import React, { useRef } from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import img1 from "../assets/client/adani_group.jpg";
import img2 from "../assets/client/GTPL.jpg";
import img3 from "../assets/client/Nirma.jpg";
import img4 from "../assets/client/ozone.jpg";
import img5 from "../assets/client/vivan.jpg";
import img6 from "../assets/client/infinity.jpg";
import img7 from "../assets/client/dangee.jpg";

const clientImages = [
  { img: img1, name: "ADANI GROUP" },
  { img: img2, name: "GTPL HATHWAY LTD." },
  { img: img3, name: "NIRMA GROUP" },
  { img: img4, name: "OZONE GROUP" },
  { img: img5, name: "Vivan Infrastructure" },
  { img: img6, name: "Infinity Infrastructure" },
  { img: img7, name: "DANGEE DUMS" },
];

const Clients = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box id="OurClient" sx={{ backgroundColor: "#fff", py: 5 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#333", textTransform: "uppercase" }}
          >
            Our Clients
          </Typography>
          <Box
            sx={{
              width: 70,
              height: 4,
              backgroundColor: "#e91e63",
              borderRadius: 2,
              mx: "auto",
              mt: 1,
            }}
          />
        </Box>

        {/* Slider */}
        <Box sx={{ position: "relative" }}>
          <Slider ref={sliderRef} {...settings}>
            {clientImages.map((client, index) => (
              <Box key={index} sx={{ px: 1, textAlign: "center" }}>
                {/* Uniform image container */}
                <Box
                  sx={{
                    width: 180,
                    height: 120,
                    mx: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={client.img}
                    alt={client.name}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography sx={{ mt: 1, fontWeight: 500, color: "#444" }}>
                  {client.name}
                </Typography>
              </Box>
            ))}
          </Slider>

          {/* Left Arrow */}
          <IconButton
            onClick={() => sliderRef.current.slickPrev()}
            sx={{
              position: "absolute",
              top: "60%", // lower
              left: { xs: 5, sm: -35 }, // inside on mobile, outside on desktop
              transform: "translateY(-50%)",
              color: "#333",
              fontSize: 40, // bigger arrow
              "&:hover": { color: "#e91e63" },
            }}
          >
            <ArrowBackIos fontSize="inherit" />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            onClick={() => sliderRef.current.slickNext()}
            sx={{
              position: "absolute",
              top: "60%", // lower
              right: { xs: 5, sm: -35 }, // inside on mobile, outside on desktop
              transform: "translateY(-50%)",
              color: "#333",
              fontSize: 40, // bigger arrow
              "&:hover": { color: "#e91e63" },
            }}
          >
            <ArrowForwardIos fontSize="inherit" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;
