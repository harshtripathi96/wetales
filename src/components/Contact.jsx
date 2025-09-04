import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Instagram,
  Pinterest,
  Facebook,
  YouTube,
  Email as EmailIcon,
} from "@mui/icons-material";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const phoneNumber = "918999 10 8999";
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill in Name, Phone, and Message fields.");
      return;
    }
    const message = `Hello Wetales Team,\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  const sendEmail = () => {
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill in Name, Phone, and Message fields.");
      return;
    }

    const subject = `Contact Form Submission from ${form.name}`;
    const body = `Hello Wetales Team,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=connect@wetales.in&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank");
  };

  return (
    <Box sx={{ py: 6, bgcolor: "#fff" }} id="contact">
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 1,
            textTransform: "uppercase",
          }}
        >
          CONTACT US
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 4,
            bgcolor: "#ff4081",
            mx: "auto",
            mb: 4,
            borderRadius: 2,
          }}
        />

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {/* Left Column */}
          <Grid item xs={12} md={5.5}>
            <Typography sx={{ mb: 2 }}>
              Please fill out the form below and we will get back to you very soon.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Stack spacing={2}>
                  <Box>
                    <Typography sx={{ mb: 1, fontWeight: 500 }}>Your Name</Typography>
                    <TextField
                      placeholder="Enter your name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      sx={{
                        backgroundColor: "#f5f5f5",
                        borderRadius: "20px",
                        "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ mb: 1, fontWeight: 500 }}>Phone</Typography>
                    <TextField
                      placeholder="Enter your phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      sx={{
                        backgroundColor: "#f5f5f5",
                        borderRadius: "20px",
                        "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography sx={{ mb: 1, fontWeight: 500 }}>Email</Typography>
                    <TextField
                      placeholder="Enter your email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      sx={{
                        backgroundColor: "#f5f5f5",
                        borderRadius: "20px",
                        "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                      }}
                    />
                  </Box>

                  {/* Desktop buttons */}
                  <Stack direction="row" spacing={2} sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#3621daff", borderRadius: 2 }}
                      onClick={sendWhatsApp}
                    >
                      SEND WHATSAPP
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#3621daff", color: "#fff", borderRadius: 2 }}
                      onClick={sendEmail}
                    >
                      SEND EMAIL
                    </Button>
                  </Stack>
                </Stack>
              </Grid>

              {/* Message Field */}
              <Grid item xs={12} sm={6}>
                <Typography sx={{ mb: 1, fontWeight: 500 }}>Your Message</Typography>
                <TextField
                  placeholder="Type your message..."
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={7}
                  size="small"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "20px",
                    "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                  }}
                />
              </Grid>

              {/* Mobile buttons */}
              <Grid
                item
                xs={12}
                sx={{
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#3621daff", borderRadius: 2 }}
                    onClick={sendWhatsApp}
                  >
                    SEND WHATSAPP
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#3621daff", color: "#fff", borderRadius: 2 }}
                    onClick={sendEmail}
                  >
                    SEND EMAIL
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* Divider */}
          <Grid
            item
            md={1}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Divider orientation="vertical" flexItem sx={{ bgcolor: "#ccc", height: "50%" }} />
          </Grid>

          {/* Right Info Column */}
          <Grid item xs={12} md={5.5}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              LOCATED IN:
            </Typography>
            <Typography mb={1}>Mumbai, Hyderabad, Bengaluru, Ahmedabad</Typography>

            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              PHONE NUMBERS:
            </Typography>
            <Typography mb={1}>(+91) 8999 10 8999, (+91) 63548 62453</Typography>

            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              CAREER:
            </Typography>
            <Typography mb={1}>(+91) 6352295170</Typography>

            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              EMAIL:
            </Typography>
            <Typography mb={1}>connect@wetales.in</Typography>

            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              SOCIAL TOUCH:
            </Typography>
            <Stack direction="row" spacing={1}>
              <a href="https://www.instagram.com/wetales.in/?hl=en" target="_blank" rel="noreferrer">
                <IconButton sx={{ color: "#E1306C" }}>
                  <Instagram />
                </IconButton>
              </a>
              <a href="https://uk.pinterest.com/wetales/" target="_blank" rel="noreferrer">
                <IconButton sx={{ color: "#ff0000" }}>
                  <Pinterest />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/wetales.in/" target="_blank" rel="noreferrer">
                <IconButton sx={{ color: "#3b5998" }}>
                  <Facebook />
                </IconButton>
              </a>
              <a
                href="https://www.youtube.com/@wetales_digitalinvitations"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton sx={{ color: "#ff0000" }}>
                  <YouTube />
                </IconButton>
              </a>
              <IconButton sx={{ color: "#0072c6" }}>
                <EmailIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
