import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom"; // 👈 needed to read ?video=

// Import videos
import functionreminder from "../assets/videos/vid1.mp4";
import digitalrsvp from "../assets/videos/vid2.mp4";
import personalizedpdf from "../assets/videos/vid3.mp4";
import weddingwebsite from "../assets/videos/vid4.mp4";
import personalizedvideo from "../assets/videos/vid5.mp4";
import whatsappdelivery from "../assets/videos/vid6.mp4";

export default function ServicesPage() {
  const videos = [
    {
      id: 1,
      title: "Function Reminders",
      description:
        "Function Reminders via WhatsApp – Never Let Guests Miss the Celebration! Keep your guests updated with personal WhatsApp reminders before your big event! 🎯 Timely updates, 🗓 Venue links & event details, 💯 Guaranteed delivery.",
      src: functionreminder,
    },
    {
      id: 2,
      title: "Digital RSVP",
      description:
        "Digital RSVP by WeTales.tech – Accurate Guest Data, Effortless Event Planning. Collect guest confirmations in advance with WeTales Digital RSVP. Ensure smooth event planning with real-time, verified guest data. ✔️ 100% Delivery. 🔒 Privacy-Focused. ⏱ Timely & Accurate.",
      src: digitalrsvp,
    },
    {
      id: 3,
      title: "Personalized PDF",
      description:
        "Personalised PDF Delivery for Wedding Invites via WhatsApp – Powered by WeTales Tech. Deliver customized wedding invitations as personalised PDFs directly to each guest on WhatsApp – complete with their name! 💯 100% Delivery. 🔐 Data Privacy & Security. ⏱ Timely & Hassle-Free Sending.",
      src: personalizedpdf,
    },
    {
      id: 4,
      title: "Wedding Website",
      description:
        "Deliver customized wedding invitations as personalised PDFs directly to each guest on WhatsApp – complete with their name. 💯 100% Delivery 🔐 Data Privacy & Security ⏱ Timely & Hassle-Free Sending.",
      src: weddingwebsite,
    },
    {
      id: 5,
      title: "Personalized Video",
      description:
        "Personalised Video Delivery on WhatsApp – Invite Guests with Style & Their Name! Make every guest feel special with WhatsApp invitation videos personalised with their name. ✨ Impress with elegance. 🔐 100% Secure & Private. 📲 Timely Delivery Guaranteed.",
      src: personalizedvideo,
    },
    {
      id: 6,
      title: "WhatsApp Delivery",
      description:
        "WhatsApp Delivery – Instantly Share Event Details with a Personal Touch! Deliver your event invites and details directly to your guests on WhatsApp – fast, secure, and personalized. 🎯 100% Delivery. 🔐 Data Privacy & Security. ⏱ Timely, Hassle-Free Communication.",
      src: whatsappdelivery,
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const location = useLocation(); // 👈 to get ?video= param

  const handleOpen = (video) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  // 👇 Scroll to top whenever this page is loaded or URL changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  // 👇 Auto-open dialog if URL has ?video=ID
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const videoId = queryParams.get("video");
    if (videoId) {
      const video = videos.find((v) => v.id === Number(videoId));
      if (video) {
        handleOpen(video);
      }
    }
  }, [location.search]);

  return (
    <>
      <Navbar />
      <Container sx={{ py: 5 }}>
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 1, textTransform: "uppercase" }}
        >
          Tech Services
        </Typography>
        <Box
          sx={{
            width: 70,
            height: 3,
            backgroundColor: "#e91e63",
            mx: "auto",
            mb: 4,
            borderRadius: 1,
          }}
        />

        {/* Card Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: { xs: 2, sm: 3 },
          }}
        >
          {videos.map((video) => (
            <Card
              key={video.id}
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0px 6px 18px rgba(0,0,0,0.15)",
                },
              }}
              onClick={() => handleOpen(video)}
            >
              <Box sx={{ height: { xs: 260, sm: 300, md: 340 } }}>
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>

              <CardContent sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                  }}
                >
                  {video.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.9rem", sm: "0.95rem" } }}
                >
                  {video.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Video Popup */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: "12px",
              height: "90vh",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 2,
              backgroundColor: "rgba(255,255,255,0.8)",
              "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Content Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flex: 1,
              minHeight: 0,
            }}
          >
            {/* Left: Video */}
            <Box
              sx={{
                flex: { xs: "0 0 auto", md: 1 },
                height: { xs: "60vh", md: "100%" },
                backgroundColor: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedVideo && (
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    backgroundColor: "#000",
                  }}
                />
              )}
            </Box>

            {/* Right: Info */}
            <Box
              sx={{
                flex: 1,
                p: 3,
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                minHeight: 0,
                maxHeight: { xs: "30vh", md: "100%" },
              }}
            >
              {selectedVideo && (
                <>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    {selectedVideo.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {selectedVideo.description}
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        </Dialog>
      </Container>
      <Footer />
    </>
  );
}
