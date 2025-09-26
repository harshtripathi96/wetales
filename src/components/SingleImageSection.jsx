import React from 'react';
import { Box } from '@mui/material';
import sampleImage from '../assets/tree.jpg'; // image path

const SingleImageSection = () => {
  return (
    <Box sx={{ py: 0, backgroundColor: '#fff' }}>
      <Box
        component="img"
        src={sampleImage}
        alt="Showcase"
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block', // removes inline spacing
          borderRadius: 0, // no rounded edges for full width
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default SingleImageSection;
