import React, { useState } from 'react';
import Image from 'next/legacy/image';
import { Box } from '@mui/material';
import Breadcrumb from '@/components/breadcrumb';
import AboutUsTabView from '@/components/AboutUs/TabView/tabview';

const AboutUs = () => {
  const [selectedTab, setSelectedTab] = useState('company_profile');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const formattedSelectedTab = selectedTab
    ?.split('_')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

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
          src={'/assets/Images/about_us.jpg'}
          alt={'Storack About Us'}
          layout="fill" // This ensures that the image takes up 100% of its parent container
          objectFit="cover" // This ensures that the image covers the entire container while maintaining its aspect ratio
        />
      </Box>

      <Box>
        <Breadcrumb
          secondaryTitle="About Us"
          secondaryTitleLink="/about-us"
          label={formattedSelectedTab}
        />
      </Box>

      <Box>
        <AboutUsTabView
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
        />
      </Box>
    </>
  );
};

export default AboutUs;
