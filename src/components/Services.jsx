import React from 'react';
import { Box, Typography, Card, CardActionArea, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import service1 from '../assets/services/function.jpg';
import service2 from '../assets/services/rsvp.jpg';
import service3 from '../assets/services/weding.jpg';
import service4 from '../assets/services/personal.jpg';
import service5 from '../assets/services/pdf.jpg';

const services = [
  { image: service1, bgColor: '#f9e8e8', videoId: 1 },
  { image: service2, bgColor: '#f7f0e8', videoId: 2 },
  { image: service3, bgColor: '#eaf8f1', videoId: 4 },
  { image: service4, bgColor: '#f1eaf8', videoId: 5 },
  { image: service5, bgColor: '#fff0f5', videoId: 6 },
];

const Services = () => {
  const navigate = useNavigate();

  const handleClick = (videoId) => {
    navigate(`/services?video=${videoId}`);
  };

  return (
    <Box sx={{ py: 6, backgroundColor: '#fff' }}>
      {/* Section Heading */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
        >
          OUR SERVICES
        </Typography>
        <Box
          sx={{
            width: 70,
            height: 3,
            backgroundColor: '#e91e63',
            margin: '6px auto 0',
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Card Grid */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          maxWidth: 840,
          mx: 'auto',
        }}
      >
        {/* Left column */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          {services.slice(0, 3).map((service, index) => (
            <ImageCard
              key={index}
              service={service}
              onClick={() => handleClick(service.videoId)}
            />
          ))}
        </Box>

        {/* Right column */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          <ImageCard
            service={services[3]}
            height={{ xs: 400, sm: 416 }}
            onClick={() => handleClick(services[3].videoId)}
          />
          <ImageCard
            service={services[4]}
            onClick={() => handleClick(services[4].videoId)}
          />
        </Box>
      </Box>
    </Box>
  );
};

const ImageCard = ({ service, height = 200, onClick }) => (
  <Card
    sx={{
      backgroundColor: service.bgColor,
      borderRadius: 2,
      boxShadow: 1,
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 3,
      },
      height,
    }}
    onClick={onClick}
  >
    <CardActionArea sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        image={service.image}
        alt="Service"
        sx={{ height: '100%', width: '100%', objectFit: 'contain' }}
      />
    </CardActionArea>
  </Card>
);

export default Services;
