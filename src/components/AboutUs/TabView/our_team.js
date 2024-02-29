import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const OurTeam = () => {
  const team = [
    {
      id: 1,
      title: 'Team 1',
      imageUrl: '/assets/Images/team-1.jpg',
    },
    {
      id: 2,
      title: 'Team 2',
      imageUrl: '/assets/Images/team-2.jpg',
    },
    {
      id: 3,
      title: 'Team 3',
      imageUrl: '/assets/Images/team-3.jpg',
    },
    {
      id: 4,
      title: 'Team 4',
      imageUrl: '/assets/Images/team-4.jpg',
    },
    {
      id: 5,
      title: 'Team 5',
      imageUrl: '/assets/Images/team-5.jpg',
    },
    {
      id: 6,
      title: 'Team 6',
      imageUrl: '/assets/Images/team-6.jpg',
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: { xs: 24, sm: 32, md: 36, lg: 48 }, my: 2 }}
        >
          Our Team
        </Typography>
      </Box>

      <Box sx={{ m: 3 }}>
        <Grid container spacing={3}>
          {team.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    px: 0,
                    py: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: 230,
                  }}
                >
                  <Box>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      width="100%"
                      height="auto"
                    />
                  </Box>
                  <Box>
                    <Typography gutterBottom variant="body1" sx={{ mt: 2 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default OurTeam;
