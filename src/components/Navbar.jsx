// Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorElBrowse, setAnchorElBrowse] = useState(null);

  const navigate = useNavigate();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleScrollToQuote = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToWhyUs = () => {
    const section = document.getElementById("whyus");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Sticky Transparent Navbar */}
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(8px)",
          color: "#000",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/" style={{ display: "inline-flex" }}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: isMobile ? 45 : 60, cursor: "pointer" }}
              />
            </Link>
          </Box>

          {/* Desktop Menu */}
          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Browse Invites */}
              <Box>
                <Button
                  color="inherit"
                  endIcon={<ExpandMoreIcon />}
                  onClick={(e) => setAnchorElBrowse(e.currentTarget)}
                >
                  BROWSE INVITES
                </Button>
                <Menu
                  anchorEl={anchorElBrowse}
                  open={Boolean(anchorElBrowse)}
                  onClose={() => setAnchorElBrowse(null)}
                >
                  <MenuItem
                    component="a"
                    href="https://wetales.in/template?cat=wedding-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setAnchorElBrowse(null)}
                  >
                    Wedding Invitation
                  </MenuItem>
                  <MenuItem
                    component="a"
                    href="https://wetales.in/template?cat=anniversary-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setAnchorElBrowse(null)}
                  >
                    Anniversary Invitation
                  </MenuItem>
                  <MenuItem
                    component="a"
                    href="https://wetales.in/template?cat=engagement-6"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setAnchorElBrowse(null)}
                  >
                    Engagement Invitation
                  </MenuItem>
                  <MenuItem
                    component="a"
                    href="https://wetales.in/template?subcat=birthday-18%2Cadult-birthday-40"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setAnchorElBrowse(null)}
                  >
                    Birthday Invitation
                  </MenuItem>
                  <MenuItem
                    component="a"
                    href="https://wetales.in/template?cat=social-events-7"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setAnchorElBrowse(null)}
                  >
                    Religious Invitation
                  </MenuItem>
                </Menu>
              </Box>

              {/* Tech Services */}
              <Button color="inherit" onClick={() => navigate("/services")}>
                TECH SERVICES
              </Button>

              {/* Customized Invite */}
              <Button color="inherit" onClick={() => navigate("/customized-invite")}>
                CUSTOMIZED INVITE
              </Button>

              {/* About Us */}
              <Button color="inherit" onClick={handleScrollToWhyUs}>
                ABOUT US
              </Button>

              {/* Get a Quote */}
              <Button
                variant="contained"
                onClick={handleScrollToQuote}
                sx={{
                  backgroundColor: "#e91e63",
                  color: "#fff",
                  borderRadius: 3,
                  px: 2.5,
                  py: 1,
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "#d81b60" },
                }}
              >
                GET A QUOTE
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ p: 3, display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <List sx={{ flexDirection: "column", gap: 1 }}>
            {/* Browse Invites Links */}
            <ListItem
              button
              component="a"
              href="https://wetales.in/template?subsubcat=royaltraditional-8%2Croyaltraditional-18"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Royal/Traditional" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://wetales.in/template?subsubcat=property-9%2Cproperty-19"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Property" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://wetales.in/template?subsubcat=story-based-15"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Story based" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://wetales.in/template?subsubcat=3d-animated-123%2C3d-animated-124"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleDrawer}
            >
              <ListItemText primary="3D Animated" />
            </ListItem>

            <Divider />

            {/* Tech Services */}
            <ListItem
              button
              onClick={() => {
                toggleDrawer();
                navigate("/services");
              }}
            >
              <ListItemText primary="Tech Services" />
            </ListItem>

            {/* Customized Invite */}
            <ListItem
              button
              onClick={() => {
                toggleDrawer();
                navigate("/customized-invite");
              }}
            >
              <ListItemText primary="Customized Invite" />
            </ListItem>

            <Divider />

            {/* About Us */}
            <ListItem
              button
              onClick={() => {
                toggleDrawer();
                setTimeout(handleScrollToWhyUs, 300);
              }}
            >
              <ListItemText primary="ABOUT US" />
            </ListItem>

            {/* Get a Quote */}
            <ListItem>
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  toggleDrawer();
                  setTimeout(handleScrollToQuote, 300);
                }}
                sx={{
                  backgroundColor: "#e91e63",
                  color: "#fff",
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "#d81b60" },
                }}
              >
                GET A QUOTE
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
