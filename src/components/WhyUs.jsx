import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DiamondIcon from '@mui/icons-material/Diamond';

const features = [
  {
    icon: <LockIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Privacy/Security',
    description: 'We do not share your personal data: contacts, event details – all secure.',
  },
  {
    icon: <PersonIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Personalisation',
    description: 'Your event is one of a kind like you. It deserves a special magic touch.',
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Creativity',
    description: 'Personalised e-cards, impressive video and a website to add to a jazzy event.',
  },
  {
    icon: <DiamondIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Uniqueness',
    description: 'Be at the top of your game and display how modern and tech-savvy you are.',
  },
];

const WhyUs = () => {
  return (
    <Box id="whyus" sx={{ backgroundColor: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
            WHY US
          </Typography>
          <Box
            sx={{
              width: '70px',
              height: '4px',
              backgroundColor: '#e91e63',
              margin: '8px auto 0',
              borderRadius: '2px',
            }}
          />
        </Box>

        {/* Paragraph */}
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: 1200,
            margin: '0 auto',
            mb: 6,
            fontSize: '20px',
            color: '#444',
          }}
        >
          Our company offers end-to-end management of digital invitations, combining design and delivery services. Join us in embracing convenience and sustainability with hassle-free and eco-friendly digital invitations.
        </Typography>

        {/* Icons and descriptions in 750px width */}
        <Box
          sx={{
            maxWidth: 1150,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {features.map((item, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                flex: '1 1 150px',
                maxWidth: 170,
                mx: 'auto',
              }}
            >
              {item.icon}
              <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, color: '#555', fontSize: '17px' }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUs;
