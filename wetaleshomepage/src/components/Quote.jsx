import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
import PeopleIcon from '@mui/icons-material/People';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import backgroundImg from '../assets/background-quote.jpg';

const stats = [
  { icon: <CakeIcon sx={{ fontSize: 32, color: '#1f3b8a' }} />, value: '7000+', label: 'Events' },
  { icon: <PeopleIcon sx={{ fontSize: 32, color: '#1f3b8a' }} />, value: '700000+', label: 'Invitations Sent' },
  { icon: <ThumbUpAltIcon sx={{ fontSize: 32, color: '#1f3b8a' }} />, value: '4.8+', label: 'Google Ratings' },
  { icon: <LocationCityIcon sx={{ fontSize: 32, color: '#1f3b8a' }} />, value: '30+', label: 'Cities' },
];

const Quote = () => {
  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection observer to trigger counter animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box sx={{ mt: 6 }}>
      <Box sx={{ maxWidth: '1250px', mx: 'auto', borderRadius: 0, overflow: 'hidden' }}>
        <Box
          sx={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            pt: { xs: 3, sm: 4 },
            pb: { xs: 6, sm: 9 },
            px: { xs: 2, sm: 3 },
            position: 'relative',
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(86, 121, 227, 0.8)',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                textTransform: 'uppercase',
                color: '#fff',
                fontSize: { xs: '1rem', sm: '1.25rem' },
              }}
            >
              Get a Quote
            </Typography>
            <Box sx={{ width: 60, height: 3, backgroundColor: '#ff1472', mx: 'auto', my: 1 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mt: 1,
                color: '#fff',
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
              }}
            >
              Be A Smart Host!
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontSize: { xs: '1rem', sm: '1.3rem' },
                maxWidth: 750,
                mx: 'auto',
                color: '#fff',
                lineHeight: { xs: 1.7, sm: 1.9 },
              }}
            >
              Entrust WeTales with the responsibility of designing and delivering the invitations while you manage the
              entire event. Experience a hassle-free journey and focus on creating memorable moments.
            </Typography>

            <Button
              variant="contained"
              size="small"
              onClick={handleScroll}
              sx={{
                mt: 2,
                backgroundColor: '#ff1472',
                px: { xs: 2, sm: 3 },
                fontSize: { xs: '0.75rem', sm: '0.85rem' },
              }}
            >
              Get a Quote
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Stats */}
      <Box
        ref={ref}
        sx={{ maxWidth: '750px', mx: 'auto', px: { xs: 2, sm: 4 }, mt: { xs: -5, sm: -7 } }}
      >
        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            p: { xs: 1.5, sm: 2 },
            textAlign: 'center',
            zIndex: 3,
            position: 'relative',
          }}
        >
          <Grid container spacing={{ xs: 4, sm: 14 }} justifyContent="center">
            {stats.map((item, index) => {
              const numericValue = parseFloat(item.value); // Get numeric part
              const hasPlus = item.value.includes('+');

              return (
                <Grid item xs={6} sm={3} key={index}>
                  <Box>
                    {item.icon}
                    <Typography
                      variant="subtitle1"
                      sx={{
                        mt: 0,
                        fontWeight: 900,
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                      }}
                    >
                      {inView ? (
                        <CountUp
                          start={0}
                          end={numericValue}
                          duration={2}
                          separator=","
                          decimals={item.value.includes('.') ? 1 : 0}
                        />
                      ) : (
                        0
                      )}
                      {hasPlus && '+'}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default Quote;
