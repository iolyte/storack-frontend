import React from 'react';
import Image from 'next/legacy/image';
import { Box, Typography, Grid, Divider } from '@mui/material';
import Breadcrumb from '@/components/breadcrumb';
import GoogleMapComponent from '@/components/googleMap';
import { ContactDetails } from './api/contact';
import ContactUsForm from '@/components/ContactUs/contact-us-form';

const ContactUs = () => {
  const { telephone, email, address } = ContactDetails;

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
      >
        <Image
          src={'/assets/Images/contact-us-banner.jpg'}
          alt={'Contact Us Banner Image'}
          layout="fill" // This ensures that the image takes up 100% of its parent container
          objectFit="cover" // This ensures that the image covers the entire container while maintaining its aspect ratio
        />
      </Box>

      <Box>
        <Breadcrumb
          secondaryTitle="Contact Us"
          secondaryTitleLink="/contact-us"
        />
      </Box>

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
          Contact Us
        </Typography>
      </Box>

      <Box sx={{ mx: { xs: 2, md: 10, lg: 20 }, mb: 2 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <GoogleMapComponent width="100%" height={250} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="body1">Cell:</Typography>
              <Typography variant="h4" fontSize="36px">
                {telephone}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography fontSize="16px" lineHeight="24px" fontWeight={500}>
                Email:
              </Typography>
              <Typography fontSize="16px" lineHeight="24px">
                {email}
              </Typography>
              <Typography fontSize="16px" lineHeight="24px" fontWeight={500}>
                Address:
              </Typography>
              <Typography fontSize="16px" lineHeight="24px">
                {address}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

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
          Get in Touch
        </Typography>
      </Box>

      <Box sx={{ mx: { xs: 2, md: 10, lg: 20 }, mb: 2 }}>
        <ContactUsForm />
      </Box>
    </>
  );
};

export default ContactUs;
