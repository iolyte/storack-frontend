import React from 'react';
import Image from 'next/legacy/image';
import { Box, Typography, Divider, Grid } from '@mui/material';
import CountersSection from '../countersSection';
import CompanyCultureSection from '../companyCultureSection';
import { ABOUT_US } from '@/utils/constents';

const CompanyProfile = () => {
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
          About Storack
        </Typography>
      </Box>

      <Box mx={{ xs: 1, sm: 5, md: 10, lg: 20 }}>
        {ABOUT_US.map((para, index) => (
          <Typography
            key={index}
            variant="inherit"
            fontFamily="arial"
            fontSize={16}
            lineHeight={1.75}
            sx={{ mb: 3 }}
          >
            {para}
          </Typography>
        ))}
      </Box>

      <Divider sx={{ mt: 8 }} />

      {/* Counters Section */}
      <Box
        sx={{
          my: 5,
          mx: 5,
        }}
      >
        <CountersSection />
      </Box>

      {/* Image 1 */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '30vh', sm: '70vh', md: '90vh' },
          position: 'relative',
        }}
      >
        <Image
          src={'/assets/Images/office-3.jpg'}
          alt={'Storack About Us'}
          layout="fill" // This ensures that the image takes up 100% of its parent container
          objectFit="cover" // This ensures that the image covers the entire container while maintaining its aspect ratio
        />
      </Box>

      {/* Company Culture */}
      <Box sx={{ mb: 5 }}>
        <CompanyCultureSection />
      </Box>
    </>
  );
};

export default CompanyProfile;
