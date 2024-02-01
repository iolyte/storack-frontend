import React from 'react';
import Image from 'next/legacy/image';
import { Box, Typography, Divider, Grid } from '@mui/material';
import CountersSection from '../countersSection';
import CompanyCultureSection from '../companyCultureSection';

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
        <Typography
          variant="inherit"
          fontFamily="arial"
          fontSize={16}
          lineHeight={1.75}
          sx={{ mb: 3 }}
        >
          Shenzhen Meizhigao Technology Company Limited (MZG) was founded in
          2002, which is a comprehensive enterprise focusing on product
          development, manufacturing, sales and service in creative DIY storage
          products. We are specialized in home storage range, and adhere to the
          concept of "customer-centric, market-oriented", based on production,
          technology innovation platform; continuously invest on development of
          creative technology and products. We have our own upgraded & creative
          storage product system; it meets demand from diﬀerent customers and
          consumers ﬂexibly. MZG also has a leading quality monitoring system,
          it obtained ISO9001 quality management system and NSF certiﬁcation of
          green environmentalprotection. MZG was listed on the market in China
          in 2015. It's one of the largest public companies in storage industry
          in China.
        </Typography>

        <Typography
          variant="inherit"
          fontFamily="arial"
          fontSize={16}
          lineHeight={1.75}
          sx={{ mb: 3 }}
        >
          We have won the trust and cooperation from global customers with our
          constantly growing storage technology and innovation ability, good
          ﬂexible customization capabilities and professional after sale
          service. MZG also provide industry shelving business and family
          shelving service for LOWES, DOSHISHA, NITORI in Japan, E–MART in South
          Korea, Samsung and other well-known retailers, buyers, agents and
          customers from nearly 30 countries and regions. At present, MZG has
          become the leading organization & storage service provider.
        </Typography>

        <Typography
          variant="inherit"
          fontFamily="arial"
          fontSize={16}
          lineHeight={1.75}
          sx={{ mb: 3 }}
        >
          We will keep working together with partners to build a green,
          intelligent, innovative on storage service system in the future, and
          to create a more warm, healthy, comfortable living and working
          environment.
        </Typography>
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
