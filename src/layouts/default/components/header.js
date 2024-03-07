import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '@/styles/Home.module.css';
import { getAllCategory } from '@/pages/api/product';
import { IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SearchProductDialog from './SearchProductDialog';
import uuid from 'react-uuid';
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

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
      id: '#aboutUs',
      label: 'ABOUT US',
      link: '/about-us',
    },
    {
      type: 'dropDown',
      label: 'PRODUCTS',
      id: '#products',
      link: '/product',
      option: subcat,
    },
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
            className={styles.logoImage}
            alt="Picture of the author"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ marginRight: 15 }}
        />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: 15 }}>
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
                    <div
                      class={`${styles.dropdown}`}
                      style={{ paddingInline: '10px' }}
                    >
                      <a href={item.link}>{item.label}</a>
                      <div class={`${styles.dropdownContent}`}>
                        {item.option.map((option) => {
                          return (
                            <div class={`${styles.product_dropdown}`}>
                              <a href={option.link}>{option.label}</a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )
                );
              })}
          </Nav>
        </Navbar.Collapse>

        {!isMobile && (
          <IconButton
            className="d-md-none d-lg-block"
            aria-label="search"
            sx={{ mr: 2 }}
            onClick={handleClickOpen}
          >
            <SearchOutlined />
          </IconButton>
        )}
      </Navbar>

      <SearchProductDialog open={open} handleClose={handleClose} />
    </>
  );
};

Header.propTypes = {};

export default Header;
