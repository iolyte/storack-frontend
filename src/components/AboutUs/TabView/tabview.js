import React, { useState } from 'react';
import { Box, Tab, Button } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import CompanyProfile from './company_profile';
import Milestones from './milestones';
import Awards from './awards';
import OurTeam from './our_team';

const AboutUsTabView = ({ selectedTab, handleTabChange }) => {
  return (
    <Box sx={{ width: '100%', typography: 'body1', mt: 2 }}>
      <TabContext value={selectedTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            textColor="primary"
            indicatorColor='#72C240'
            onChange={(event, newValue) => {
              handleTabChange(event, newValue);
            }}
            aria-label="About Us Tab View"
            centered
          >
            <Tab
              label="Company Profile"
              value="company_profile"
              sx={{ px: 2 }}
            />
            <Tab label="Milestones" value="milestones" sx={{ px: 2 }} />
            <Tab label="Awards" value="awards" sx={{ px: 2 }} />
            <Tab label="Our Team" value="our_team" sx={{ px: 2 }} />
          </TabList>
        </Box>

        <TabPanel value="company_profile">
          <CompanyProfile />
        </TabPanel>

        <TabPanel value="milestones">
          <Milestones />
        </TabPanel>

        <TabPanel value="awards">
          <Awards />
        </TabPanel>

        <TabPanel value="our_team">
          <OurTeam />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default AboutUsTabView;
