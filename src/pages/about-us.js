import React, { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import { Box } from '@mui/material';
import Breadcrumb from '@/components/breadcrumb';
import AboutUsTabView from '@/components/AboutUs/TabView/tabview';
import { useSearchParams } from 'next/navigation';
import CompanyProfile from '@/components/AboutUs/TabView/company_profile';

const TABS = ['company_profile', 'milestones', 'awards', 'our_team'];

const AboutUs = () => {
  const [selectedTab, setSelectedTab] = useState('company_profile');

  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const formattedSelectedTab = selectedTab
    ?.split('_')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  useEffect(() => {
    if (tab && TABS.includes(tab)) {
      setSelectedTab(tab);
    }
  }, [tab]);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: { xs: '30vh', sm: '70vh', md: '90vh' },
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
        <Breadcrumb secondaryTitle="About Us" secondaryTitleLink="/about-us" />
      </Box>

      <Box>
        {/* <AboutUsTabView
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
        /> */}
        <CompanyProfile />
      </Box>
    </>
  );
};

export default AboutUs;
