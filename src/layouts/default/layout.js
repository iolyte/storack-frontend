import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import homeCss from '@/styles/Home.module.css';
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
      <Box
        className={homeCss.BottomNavbar}
        position={'fixed'}
        bottom={0}
        width={'100%'}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component="a"
            href="/"
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="/product"
            label="Product"
            icon={<ProductionQuantityLimitsIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="/about-us"
            label="About"
            icon={<InfoIcon />}
          />
          <BottomNavigationAction
            component="a"
            href="/contact-us"
            label="Contact"
            icon={<CallIcon />}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
