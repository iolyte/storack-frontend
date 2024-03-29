import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'Reward 1',
      imageUrl: '/assets/Images/reward-1.jpg',
    },
    {
      id: 2,
      title: 'Reward 2',
      imageUrl: '/assets/Images/reward-2.jpg',
    },
    {
      id: 3,
      title: 'Reward 3',
      imageUrl: '/assets/Images/reward-3.jpg',
    },
    {
      id: 4,
      title: 'Reward 4',
      imageUrl: '/assets/Images/reward-4.jpg',
    },
    {
      id: 5,
      title: 'Reward 5',
      imageUrl: '/assets/Images/reward-5.jpg',
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
          Awards
        </Typography>
      </Box>
      <Box sx={{ m: 3 }}>
        <Grid container spacing={2}>
          {awards.map((reward) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    p: 1,
                    border: 1,
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={reward.imageUrl}
                    alt={reward.title}
                    width="100%"
                    height="250"
                  />
                  <Typography gutterBottom variant="h6" sx={{ mt: 2 }}>
                    {reward.title}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Awards;
