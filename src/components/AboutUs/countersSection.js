import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import CountUp from 'react-countup';

const CountersSection = () => {
  const counterData = [
    {
      count: 2002,
      title: 'Since',
      subtitle: 'Found',
      sign: '+',
    },
    {
      count: 80,
      title: null,
      subtitle: 'Group Patents',
      sign: '+',
    },
    {
      count: 2015,
      title: null,
      subtitle: 'The Largest company in storage industry listed in India',
      sign: null,
    },
    {
      count: 30,
      title: null,
      subtitle: 'ODM/OEM Solution Services in 30+ Countries with partner',
      sign: '+',
    },
    {
      count: 1000,
      title: null,
      subtitle: 'Domestic Retail',
      sign: '+',
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        {counterData.map(({ title, subtitle, count, sign }, index) => {
          return (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Box
                sx={{
                  minHeight: 100,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                  }}
                >
                  {title && (
                    <Typography
                      variant="inherit"
                      fontFamily="arial"
                      fontSize={18}
                      fontWeight={700}
                      sx={{ mx: 0.5 }}
                    >
                      {title.toUpperCase()}
                    </Typography>
                  )}
                  <CountUp
                    end={count}
                    duration={5}
                    separator=""
                    style={{
                      fontFamily: 'arial',
                      fontSize: 60,
                      fontWeight: 700,
                    }}
                  />
                  {sign && (
                    <Typography
                      variant="inherit"
                      fontFamily="arial"
                      fontSize={18}
                      fontWeight={700}
                      sx={{ mx: 0.5 }}
                    >
                      {sign}
                    </Typography>
                  )}
                </Box>
                <Typography
                  sx={{ mt: -1 }}
                  variant="inherit"
                  fontFamily="arial"
                  align="center"
                  fontSize={14}
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

export default CountersSection;
