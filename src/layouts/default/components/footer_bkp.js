import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import homeCss from '@/styles/Home.module.css';
import Accordions from './Accordion';

const Footer = (props) => {
  const aboutNavigationLabel = [
    {
      label: 'Company Profile',
      link: '#',
    },
    {
      label: 'Milestone',
      link: '#',
    },
    {
      label: 'Awards',
      link: '#',
    },
    {
      label: 'Our Team',
      link: '#',
    },
    {
      label: 'Milestone',
      link: '#',
    },
  ];

  const productsNavigationLabel = [
    {
      label: 'Living room',
      link: '#',
    },
    {
      label: 'Kitchen',
      link: '#',
    },
    {
      label: 'Bathroom',
      link: '#',
    },
    {
      label: 'Bedroom',
      link: '#',
    },
    {
      label: 'Balcony',
      link: '#',
    },
    {
      label: 'Garage Storage',
      link: '#',
    },
    {
      label: 'Warehouse ',
      link: '#',
    },
    {
      label: 'Commercial',
      link: '#',
    },
    {
      label: 'Industrial Storage',
      link: '#',
    },
  ];

  const scenariosNavigationLabel = [
    {
      label: 'Living room',
      link: '#',
    },
    {
      label: 'Kitchen',
      link: '#',
    },
    {
      label: 'Bathroom',
      link: '#',
    },
    {
      label: 'Bedroom',
      link: '#',
    },
    {
      label: 'Single-apartment',
      link: '#',
    },
    {
      label: 'Study ',
      link: '#',
    },
    {
      label: 'Balcony',
      link: '#',
    },
    {
      label: 'Garage Storage',
      link: '#',
    },
  ];

  const newsNavigationLabel = [
    {
      label: 'Company News',
      link: '#',
    },
    {
      label: 'Industry News',
      link: '#',
    },
  ];

  return (
    <footer
      className={`page-footer font-small blue pt-4 bg-dark text-white ${homeCss.footerMargin}`}
    >
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-3 text-start">
            <img
              src="/assets/logos/logo.png"
              width={265}
              height={50}
              alt="Picture of the author"
            />
            <h6 className="mt-4">Contact Us</h6>
            <div className="text-secondary">
              <p>Email : support.storack@gmail.com</p>
              <p>
                Address :
                <br />
                2nd Floor, 1st Building, No. 188, East Road, Ahmadabad, Gujarat,
                India
              </p>
              {/* <p>Website: https://meizhigao.com/</p> */}
            </div>
          </div>

          {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}

          {/* <div className="col-md-2 mb-md-0 mb-3 text-start d-none d-md-block">
            <h5 className="text-uppercase mt-md-3">About Us</h5>
            <ul className="list-unstyled mt-md-4">
              {aboutNavigationLabel.length > 0 &&
                aboutNavigationLabel.map((item) => {
                  return (
                    <li key={uuid()}>
                      <a
                        href={item.link}
                        className="text-secondary text-decoration-none"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <Accordions title="ABOUT US" list={aboutNavigationLabel} /> */}

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-2 mb-md-0 mb-3 text-start d-none d-md-block">
            <h5 className="text-uppercase mt-md-3">Products</h5>
            <ul className="list-unstyled mt-md-4">
              {productsNavigationLabel.length > 0 &&
                productsNavigationLabel.map((item) => {
                  return (
                    <li key={uuid()}>
                      <a
                        href={item.link}
                        className="text-secondary text-decoration-none"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>

          <Accordions title="PRODUCT" list={productsNavigationLabel} />
          {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}

          {/* <div className="col-md-2 mb-md-0 mb-3 text-start d-none d-md-block">
            <h5 className="text-uppercase mt-md-3">Scenarios</h5>
            <ul className="list-unstyled mt-md-4">
              {scenariosNavigationLabel.length > 0 &&
                scenariosNavigationLabel.map((item) => {
                  return (
                    <li key={uuid()}>
                      <a
                        href={item.link}
                        className="text-secondary text-decoration-none"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div> */}
          {/* <Accordions title="SCENARIOS" list={scenariosNavigationLabel} /> */}

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
