import React from 'react';
import Image from 'next/legacy/image';
import { Grid, Box, Typography } from '@mui/material';

const CompanyCultureSection = () => {
  const companyCultureData = [
    {
      title: 'Business Philosophy',
      subtitle: 'Create values for customers',
      imageUrl: '/assets/Images/cc_1.png',
    },
    {
      title: 'Mission',
      subtitle: 'Expand the space saver & improve life quality',
      imageUrl: '/assets/Images/cc_2.png',
    },
    {
      title: 'Corporate Vision',
      subtitle:
        'To be the professional leading organization & storage service provider',
      imageUrl: '/assets/Images/cc_3.png',
    },
    {
      title: 'Core Value',
      subtitle: 'Grateful, integrity, innovation ,win-win',
      imageUrl: '/assets/Images/cc_4.png',
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
          Company Culture
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ p: 2 }}>
        {companyCultureData.map(({ imageUrl, title, subtitle }, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Image src={imageUrl} alt={title} width={50} height={50} />
                <Typography
                  variant="inherit"
                  fontSize={18}
                  fontWeight={700}
                  sx={{ mt: 5 }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontSize={14}
                  fontStyle={400}
                  sx={{ mt: 2 }}
                >
                  {subtitle}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CompanyCultureSection;
