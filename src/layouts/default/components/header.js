import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = (props) => {
  const menuBarLabel = [
    {
      type: 'text',
      id: '#home',
      label: 'Home',
      link: '/',
    },
    {
      type: 'dropDown',
      label: 'About Us',
      id: '#aboutUs',
      link: '/about-us',
      option: [
        {
          label: 'Company Profile',
          link: '/about-us#company-profile',
        },
        {
          label: 'Milestone',
          link: '/about-us#milestone',
        },
        {
          label: 'Awards',
          link: '/about-us#awards',
        },
        {
          label: 'Our Team',
          link: '/about-us#our-team',
        },
      ],
    },
    {
      type: 'dropDown',
      label: 'PRODUCTS',
      id: '#products',
      link: '#',
      option: [
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
      ],
    },
    {
      type: 'text',
      label: 'NEWS',
      id: '#news',
      link: '#',
    },
    {
      type: 'text',
      label: 'SOLUTION',
      id: '#solution',
      link: '#',
    },
    {
      type: 'text',
      label: 'CONTACT US',
      id: '#contactUs',
      link: '#',
    },
  ];
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mt-2 container-fluid"
      style={{ fontFamily: 'arial', backgroundColor: '#fff' }}
    >
      <Navbar.Brand href="#home">
        <img
          src="/assets/logos/logo.png"
          style={{ paddingInline: '20px' }}
          width={265}
          height={50}
          alt="Picture of the author"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {menuBarLabel.length > 0 &&
            menuBarLabel.map((item) => {
              return item.type === 'text' ? (
                <Nav.Link
                  id={item.id}
                  href={item.link}
                  style={{ paddingInline: '10px' }}
                  className="text-uppercase"
                >
                  {item.label}
                </Nav.Link>
              ) : (
                item.option.length > 0 && (
                  <NavDropdown
                    title={item.label}
                    style={{ paddingInline: '10px' }}
                    id="basic-nav-dropdown"
                    className="text-uppercase"
                  >
                    {item.option.map((option) => {
                      return (
                        <NavDropdown.Item
                          href={option.link}
                          className="text-uppercase"
                        >
                          {option.label}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                )
              );
            })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {};

export default Header;
