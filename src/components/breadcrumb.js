import React from 'react';

import { Breadcrumbs, Link, Typography } from '@mui/material';

import Iconify from '../components/iconify';

const Breadcrumb = (props) => {
  const {
    primaryTitleIcon = 'ic:round-home',
    primaryTitle = 'Home',
    primaryTitleLink = '/',
    secondaryTitle,
    secondaryTitleLink,
    label,
  } = props;

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mx: 2, my: 1 }}>
        <Link
          underline="hover"
          color="inherit"
          href={primaryTitleLink}
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Iconify icon={primaryTitleIcon} sx={{ mr: 1 }} />
          {primaryTitle}
        </Link>
        {secondaryTitle && (
          <Link
            underline={secondaryTitleLink ? 'hover' : 'none'}
            color="inherit"
            href={secondaryTitleLink}
          >
            {secondaryTitle}
          </Link>
        )}
        {label && <Typography color="text.primary">{label}</Typography>}{' '}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
