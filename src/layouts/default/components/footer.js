import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import homeCss from '@/styles/Home.module.css';
import Accordions from './Accordion';
import { ContactDetails, socialLinks } from '@/pages/api/contact';
import { Stack } from '@mui/material';
import Iconify from '@/components/iconify';
import Link from 'next/link';

const Footer = (props) => {
  return (
    <footer
      className={`page-footer font-small blue pt-4 bg-dark text-white ${homeCss.footerMargin}`}
    >
      <div className="container-fluid text-center text-md-left">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-md-4 mt-md-0 mt-0 text-start">
            <img
              src="/assets/logos/logo.png"
              width={265}
              height={50}
              alt="Storack Logo"
            />
            <Stack
              direction="row"
              spacing={4}
              sx={{ mt: 2, ml: 1, mb: { xs: 2, sm: 0 } }}
            >
              {socialLinks.facebook && (
                <Link href={socialLinks.facebook} target="_blank">
                  <Iconify
                    icon="entypo-social:facebook"
                    width={30}
                    sx={{ color: 'white' }}
                  />
                </Link>
              )}
              {socialLinks.instagram && (
                <Link href={socialLinks.instagram} target="_blank">
                  <Iconify
                    icon="entypo-social:instagram"
                    width={30}
                    sx={{ color: 'white' }}
                  />
                </Link>
              )}
              {socialLinks.youtube && (
                <Link href={socialLinks.youtube} target="_blank">
                  <Iconify
                    icon="entypo-social:youtube"
                    width={30}
                    sx={{ color: 'white' }}
                  />
                </Link>
              )}
              {socialLinks.twitter && (
                <Link href={socialLinks.twitter} target="_blank">
                  <Iconify
                    icon="entypo-social:twitter"
                    width={30}
                    sx={{ color: 'white' }}
                  />
                </Link>
              )}
            </Stack>
          </div>

          <div className="col-md-4 mt-md-0 mt-0 text-start">
            <h6 className="mt-2">Contact Us</h6>
            <div className="text-secondary">
              <p>Email : {ContactDetails.email}</p>
              <p>Cell: {ContactDetails.telephone}</p>
            </div>
          </div>

          <div className="col-md-4 mt-md-0 mt-0 text-start">
            <h6 className="mt-2">Our office</h6>
            <div className="text-secondary">
              <p>
                Address :
                <br />
                {ContactDetails.address}
              </p>
            </div>
          </div>

          <hr
            className="clearfix w-100 mt-3 pb-0 text-center"
            style={{ margin: 'revert' }}
          />

          <div className="col-md-12 mb-md-0 mb-3 mt-md-3">
            <p className="mb-md-5 mt-md-3">
              Storack PVT LTD. Copyright © All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
