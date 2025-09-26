// src/pages/CustomizedInvite.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../components/Navbar";

// Import images from assets
import weddingImg from "../assets/client/adani_group.jpg";
import birthdayImg from "../assets/client/adani_group.jpg";
import corporateImg from "../assets/client/adani_group.jpg";
import babyShowerImg from "../assets/client/adani_group.jpg";
import graduationImg from "../assets/client/adani_group.jpg";
import anniversaryImg from "../assets/client/adani_group.jpg";
import bridalShowerImg from "../assets/client/adani_group.jpg";
import housewarmingImg from "../assets/client/adani_group.jpg";
import retirementImg from "../assets/client/adani_group.jpg";
import engagementImg from "../assets/client/adani_group.jpg";

const CustomizedInvite = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const invitationCards = [
    { id: 1, title: "Wedding Invitation", image: weddingImg, caption: "Elegant & Romantic", description: "Create beautiful wedding invitations with elegant typography, floral designs, and romantic color schemes. Perfect for traditional and modern weddings alike. Customize with your photos, wedding details, and personal touches to make your special day even more memorable." },
    { id: 2, title: "Birthday Party", image: birthdayImg, caption: "Fun & Colorful", description: "Design vibrant birthday party invitations that capture the joy and excitement of your celebration. Choose from playful themes, bright colors, and fun graphics. Add party details, RSVP information, and special messages to create the perfect invitation for any age." },
    { id: 3, title: "Corporate Event", image: corporateImg, caption: "Professional & Modern", description: "Professional corporate event invitations that make a lasting impression. Clean designs with modern typography and sophisticated layouts. Perfect for conferences, seminars, product launches, and business gatherings. Maintain your brand identity while creating elegant invitations." },
    { id: 4, title: "Baby Shower", image: babyShowerImg, caption: "Sweet & Adorable", description: "Adorable baby shower invitations with cute illustrations and soft pastel colors. Create heartwarming invitations that celebrate the upcoming arrival. Customize with baby themes, sweet messages, and all the important details for your special celebration." },
    { id: 5, title: "Graduation Party", image: graduationImg, caption: "Achievement & Success", description: "Celebrate academic achievements with stylish graduation party invitations. Incorporate school colors, graduation caps, and inspiring messages. Perfect for high school, college, or any educational milestone. Make your graduation celebration as special as your accomplishment." },
    { id: 6, title: "Anniversary", image: anniversaryImg, caption: "Love & Celebration", description: "Commemorate your special milestone with beautiful anniversary invitations. Elegant designs that reflect your journey together with romantic themes and sophisticated styling. Perfect for celebrating years of love, commitment, and shared memories." },
    { id: 7, title: "Bridal Shower", image: bridalShowerImg, caption: "Feminine & Elegant", description: "Create stunning bridal shower invitations with delicate florals and feminine touches. Soft color palettes and elegant typography make these perfect for celebrating the bride-to-be. Customize with shower details and special messages for the perfect pre-wedding celebration." },
    { id: 8, title: "Housewarming", image: housewarmingImg, caption: "Warm & Welcoming", description: "Welcome friends and family to your new home with charming housewarming invitations. Cozy designs that reflect the warmth of your new space. Perfect for celebrating new beginnings and creating memories in your new home." },
    { id: 9, title: "Retirement Party", image: retirementImg, caption: "Celebration & Honor", description: "Honor years of dedication with elegant retirement party invitations. Sophisticated designs that celebrate achievements and new beginnings. Perfect for commemorating a successful career and welcoming the next chapter of life." },
    { id: 10, title: "Engagement Party", image: engagementImg, caption: "Joy & Romance", description: "Celebrate your engagement with beautiful party invitations that capture the excitement of your upcoming wedding. Romantic designs with elegant details perfect for announcing your special news and gathering loved ones to celebrate your love story." },
  ];

  const handleCardClick = (card) => setSelectedCard(card);
  const handleCloseModal = () => setSelectedCard(null);

  return (
    <>
      <Navbar />

      <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh", px: { xs: 2, md: 6 }, py: { xs: 4, md: 6 } }}>
        {/* Section Title */}
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: "center", mb: 2, color: "#2c3e50" }}>
          Customized Invitations
        </Typography>

        <Typography variant="h6" sx={{ textAlign: "center", color: "text.secondary", mb: 6, maxWidth: 700, mx: "auto" }}>
          Create unique and personalized invitations that leave a lasting impression. Click on any card to see more details.
        </Typography>

        {/* Cards Grid: 3 per row desktop */}
        <Grid container spacing={4} justifyContent="center">
          {invitationCards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: 320,
                  borderRadius: 3,
                  boxShadow: 3,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    boxShadow: 8,
                    transform: "translateY(-5px)",
                    "& .card-media": { transform: "scale(1.05)" },
                  },
                }}
                onClick={() => handleCardClick(card)}
              >
                <CardMedia
                  className="card-media"
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{ height: 180, objectFit: "cover", transition: "transform 0.3s ease" }}
                />
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#2c3e50" }}>{card.title}</Typography>
                  <Typography variant="body2" sx={{ fontStyle: "italic", color: "#e91e63" }}>{card.caption}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Modal Popup */}
        <Dialog open={!!selectedCard} onClose={handleCloseModal} maxWidth="md" fullWidth PaperProps={{ sx: { borderRadius: 3, maxHeight: "90vh" } }}>
          <DialogContent sx={{ p: 0, position: "relative" }}>
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: "absolute", right: 8, top: 8, zIndex: 1, backgroundColor: "rgba(255,255,255,0.9)", "&:hover": { backgroundColor: "rgba(255,255,255,1)" } }}
            >
              <CloseIcon />
            </IconButton>

            {selectedCard && (
              <Grid container sx={{ minHeight: { xs: "auto", md: 500 } }}>
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={selectedCard.image}
                    alt={selectedCard.title}
                    sx={{ width: "100%", height: { xs: 250, md: "100%" }, objectFit: "cover", borderRadius: isMobile ? 0 : "12px 0 0 12px" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: { xs: 3, md: 4 }, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "#2c3e50" }}>{selectedCard.title}</Typography>
                    <Typography variant="subtitle1" sx={{ color: "#e91e63", fontWeight: 600, mb: 3, fontStyle: "italic" }}>{selectedCard.caption}</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7, color: "text.secondary", fontSize: "1.1rem" }}>{selectedCard.description}</Typography>
                  </Box>
                </Grid>
              </Grid>
            )}
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default CustomizedInvite;
