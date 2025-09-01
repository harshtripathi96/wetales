// Testimonial.jsx
import React, { useRef } from "react";
import Slider from "react-slick";
import { Box, Typography, IconButton, Rating } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const testimonials = [
  {
    message:
      "Extremely satisfied while dealing with WeTales team. Would like to refer to other friends. Fees are also reasonable. Lot of varieties and themes available with them for meeting one's expectations. Keep it up!",
    name: "AGARIYA BABITA",
    rating: 5,
  },
  {
    message:
      "We had a good experience working with WeTales. They provide a variety of services and are able to deliver what you ask for in a timely manner.",
    name: "SHRUSHTI PATEL",
    rating: 4,
  },
  {
    message:
      "We had a great experience working with we tales and the team. They are very much innovative and precise in their work. Reetu from the team did amazing work for us. Thank you :)",
    name: "AMI PANCHAL",
    rating: 5,
  },
  {
    message:
      "WeTales team has done excellent work. All event details were timely delivered. GOOD JOB!",
    name: "HITESH SHAH",
    rating: 4,
  },
];

const Testimonial = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // using custom arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box id ="OurTestimonial" sx={{ backgroundColor: "#fff", py: { xs: 4, md: 8 } }}>
      <Box maxWidth="lg" sx={{ mx: "auto", px: 2, position: "relative" }}>
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#000",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Testimonial
          </Typography>
          <Box
            sx={{
              width: 70,
              height: 3,
              backgroundColor: "#e91e63",
              mx: "auto",
              borderRadius: 1,
            }}
          />
        </Box>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: 2,
                textAlign: "center",
                p: 3,
                mx: 2,
                minHeight: 260,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  color: "#333",
                  mb: 2,
                  minHeight: 100, // keeps space even for short text
                }}
              >
                “{t.message}”
              </Typography>
              <Box sx={{ mt: "auto" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    color: "#c2185b",
                  }}
                >
                  {t.name}
                </Typography>
                {/* ⭐ Rating under name */}
                <Rating
                  value={t.rating}
                  readOnly
                  size="small"
                  sx={{ mt: 1 }}
                />
              </Box>
            </Box>
          ))}
        </Slider>

       {/* Custom Arrows */}
<IconButton
  onClick={() => sliderRef.current.slickPrev()}
  sx={{
    position: "absolute",
    top: "65%", // ⬅️ moved lower
    left: { xs: 10, sm: 10, md: 10, lg: -40 },
    transform: "translateY(-50%)",
    color: "#333",
    fontSize: "42px",
    backgroundColor: "rgba(255,255,255,0.8)",
    "&:hover": { color: "#e91e63", backgroundColor: "rgba(255,255,255,1)" },
    zIndex: 2,
  }}
>
  <ArrowBackIos fontSize="inherit" />
</IconButton>

<IconButton
  onClick={() => sliderRef.current.slickNext()}
  sx={{
    position: "absolute",
    top: "65%", // ⬅️ moved lower
    right: { xs: 10, sm: 10, md: 10, lg: -40 },
    transform: "translateY(-50%)",
    color: "#333",
    fontSize: "42px",
    backgroundColor: "rgba(255,255,255,0.8)",
    "&:hover": { color: "#e91e63", backgroundColor: "rgba(255,255,255,1)" },
    zIndex: 2,
  }}
>
  <ArrowForwardIos fontSize="inherit" />
</IconButton>

      </Box>
    </Box>
  );
};

export default Testimonial;
