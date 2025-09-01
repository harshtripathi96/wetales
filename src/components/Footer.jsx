import React from "react";
import "./Footer.css";
import { Instagram, Facebook, YouTube } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  Link,
} from "@mui/material";

const Footer = () => {
  const handleScrollToWhyUs = () => {
  const whyUsSection = document.getElementById('whyus');
  if (whyUsSection) {
    whyUsSection.scrollIntoView({ behavior: 'smooth' });
  }
};
   const handleScrollTocontact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToOurClient = ()=>{
    const ClientSection = document.getElementById('OurClient');
    if(ClientSection){
      ClientSection.scrollIntoView({behavior:'smooth'})
    }
  };
  const handleScrollToOurTestimonial = ()=>{
    const TestimonialSection = document.getElementById('OurTestimonial');
    if(TestimonialSection){
      TestimonialSection.scrollIntoView({behavior:'smooth'})
    }
  };

  return (
    <Box component="footer" sx={{ background: "#111", color: "#fff", pt: 6, pb: 3 }}>
      {/* Main Content */}
      <Box className="footer-content">
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {/* Column 1 - Services */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                SERVICES
              </Typography>
              <hr />
              <Stack spacing={1} sx={{ mt: 1 }}>
                <Link href="#" underline="hover" color="inherit">
                  Customised Invitation Design & Video
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Personalised Delivery
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Deliver Your Invites
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Personalised Wedding Website
                </Link>
              </Stack>
            </Grid>

            {/* Column 2 - Events */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                EVENTS
              </Typography>
              <hr />
              <Stack spacing={1} sx={{ mt: 1 }}>
                <Typography sx={{ fontWeight: "bold" }}>Social Events</Typography>
                <Link href="https://wetales.in/template?cat=engagement-6" underline="hover" color="inherit">
                  Engagement Invitation
                </Link>
                <Link href="https://wetales.in/template?cat=social-events-7&subcat=adult-birthday-40" underline="hover" color="inherit">
                  Birthday Invitation
                </Link>
                <Link href="https://wetales.in/template?cat=baby-8" underline="hover" color="inherit">
                  Baby Shower Invitation
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Inauguration Invitation
                </Link>
                <Link href="https://wetales.in/template?cat=anniversary-5" underline="hover" color="inherit">
                  Anniversary Invitation
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Party Invitation
                </Link>
              </Stack>
            </Grid>

            {/* Column 3 - Company */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                COMPANY
              </Typography>
              <hr />
              <Stack spacing={1} sx={{ mt: 1 }}>
                <Link href="#" underline="hover" color="inherit" onClick={handleScrollToWhyUs}>
                  About Us 
                </Link>
                <Link href="#" underline="hover" color="inherit" onClick={handleScrollTocontact}>
                  Contact Us
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Privacy Policy
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Terms and Condition
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Become A Partner
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Pay Online
                </Link>
                <Link href="#" underline="hover" color="inherit" onClick={handleScrollToOurClient}>
                  Our Clients
                </Link>
                <Link href="#" underline="hover" color="inherit">
                  Our Partners
                </Link>
                <Link href="#" underline="hover" color="inherit" onClick={handleScrollToOurTestimonial}>
                  Our Testimonials
                </Link>
              </Stack>
            </Grid>
          </Grid>

          {/* Center Logo & Social Icons */}
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <img src="/logo.jpg" alt="wetales logo" style={{ height: 80 }} />
            <Typography variant="body1" sx={{ mt: 1 }}>
              wetales.in
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 1 }}>
              <IconButton
                component="a"
                href="https://www.instagram.com/wetales.in/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#fff", "&:hover": { color: "#E1306C" } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.facebook.com/wetales.in/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#fff", "&:hover": { color: "#1877F2" } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com/@wetales_digitalinvitations"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#fff", "&:hover": { color: "#FF0000" } }}
              >
                <YouTube />
              </IconButton>
            </Stack>

            <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
              Wetales © 2025 All Right Reserved
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
