import React from 'react';
import Image from 'next/legacy/image';
import { Box, Typography, Divider, Grid } from '@mui/material';
import CountersSection from '../countersSection';
import CompanyCultureSection from '../companyCultureSection';

const CompanyProfile = () => {
  const aboutUs = [
    'Storack India Overseas, a visionary enterprise, was established in [year] with a focus on pioneering product development, manufacturing, and exceptional service in the realm of creative DIY storage solutions. Specializing in home storage, we embody the philosophy of being "customer-centric, market-oriented." Our commitment to innovation is underscored by a robust production and technology platform, fueling continuous investment in creative technology and product development.',
    'At Storack India Overseas, we take pride in our upgraded and inventive storage product system designed to cater flexibly to diverse customer and consumer demands. We have curated a comprehensive range of creative DIY storage products that not only elevate functionality but also add a touch of innovation to your living and working spaces.',
    'Our products ensuring the highest standards, our company boasts a leading-edge quality monitoring system. Storack India Overseas has been accredited with the ISO9001 quality management system and the prestigious NSF certification for green environmental protection. Our unwavering commitment to quality sets us apart, making us a trusted name in the industry.',
    'As we move forward, Storack India Overseas envisions collaborating with partners to build a green, intelligent, and innovative storage service system. Our aim is to create a warm, healthy, and comfortable living and working environment for all.',
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
          variant="h3"
          fontWeight={700}
          fontFamily="arial"
          sx={{ my: 2 }}
        >
          About Storack
        </Typography>
      </Box>

      <Box
        sx={{
          mx: 11,
        }}
      >
        {aboutUs.map((para, index) => (
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
          my: 8,
        }}
      >
        <CountersSection />
      </Box>

      {/* Image 1 */}
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
      >
        <Image
          src={'/assets/Images/about_us_cp_1.jpg'}
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
