import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import homeCss from '@/styles/Home.module.css';
import uuid from 'react-uuid';
import { getAllCategory } from '@/pages/api/product';
import { IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SearchProductDialog from './SearchProductDialog';

const Header = (props) => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    allCategory();
  }, []);

  const allCategory = async () => {
    const res = await getAllCategory();
    setCategory(res);
  };

  const subcat = [];

  category.category &&
    category.category.length > 0 &&
    category.category.map((item) => {
      subcat.push({
        label: item.name,
        link: `/product?cat_id=${item.id}`,
      });
    });

  const menuBarLabel = [
    {
      type: 'text',
      id: '#home',
      label: 'Home',
      link: '/',
    },
    {
      type: 'text',
      label: 'About Us',
      id: '#aboutUs',
      link: '/about-us',
    },
    {
      type: 'dropDown',
      label: 'PRODUCTS',
      id: '#products',
      link: '/product',
      option: subcat,
    },
    // {
    //   type: 'text',
    //   label: 'NEWS',
    //   id: '#news',
    //   link: '#',
    // },
    {
      type: 'text',
      label: 'SOLUTION',
      id: '#solution',
      link: '/solutions',
    },
    {
      type: 'text',
      label: 'CONTACT US',
      id: '#contactUs',
      link: '/contact-us',
    },
  ];

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary mt-2 container-fluid"
        style={{ fontFamily: 'arial', backgroundColor: '#fff' }}
      >
        <Navbar.Brand href="#home">
          <img
            src="/assets/logos/logo.png"
            style={{ paddingInline: '20px' }}
            className={homeCss.logoImage}
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
                    key={uuid()}
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
                      key={uuid()}
                      title={item.label}
                      style={{ paddingInline: '10px' }}
                      id="basic-nav-dropdown"
                      className="text-uppercase"
                    >
                      {item.option.map((option) => {
                        return (
                          <NavDropdown.Item
                            key={uuid()}
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
        <IconButton
          aria-label="search"
          sx={{ mr: 2 }}
          onClick={handleClickOpen}
        >
          <SearchOutlined />
        </IconButton>
      </Navbar>

      <SearchProductDialog open={open} handleClose={handleClose} />
    </>
  );
};

Header.propTypes = {};

export default Header;
