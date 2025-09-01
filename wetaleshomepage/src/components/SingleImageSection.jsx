import React from 'react';
import { Box, Container } from '@mui/material';
import sampleImage from '../assets/tree.jpg'; // image path

const SingleImageSection = () => {
  return (
    <Box sx={{ py:0, backgroundColor: '#fff' }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          src={sampleImage}
          alt="Showcase"
          sx={{
            width: '100%',
            maxWidth: '1050px',
            borderRadius: 1,
            boxShadow: 1,
            objectFit: 'cover',
          }}
        />
      </Container>
    </Box>
  );
};

export default SingleImageSection;
