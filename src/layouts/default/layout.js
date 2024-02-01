import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';

// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
