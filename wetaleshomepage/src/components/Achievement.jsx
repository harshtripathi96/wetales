import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import ach1 from '../assets/ach1.jpg';
import ach2 from '../assets/ach2.jpg';
import ach3 from '../assets/ach3.jpg';

const images = [ach1, ach2, ach3];

const Achievement = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', py: 1 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 'bold', color: '#333' }}
          >
            ACHIEVEMENT
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

        {/* Image row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          {images.map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`Achievement ${index + 1}`}
              sx={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: 0,
                boxShadow: 3,
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Achievement;
