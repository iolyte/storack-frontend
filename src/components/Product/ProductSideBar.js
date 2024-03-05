import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Link, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Carousel from 'react-multi-carousel';
import homeCss from '@/styles/Home.module.css';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { allProduct, getAllCategory } from '@/pages/api/product';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  width: '100%',
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const ProductSideBar = () => {
  const [category, setCategory] = React.useState([]);

  const [hotItems, setHotItems] = React.useState([]);

  const allCategory = async () => {
    const res = await getAllCategory();
    setCategory(res);
  };

  const getHotItems = async () => {
    const response = await allProduct(1, '', null, null, 5, true, false);

    const temp = response.products.map((item, index) => {
      return {
        id: item?.id,
        name: item?.name || 'Hot Product',
        link: `${BASE_URL}/${item?.images[0]}`,
      };
    });

    setHotItems(temp);
  };

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    allCategory();
    getHotItems();
  }, []);

  return (
    <>
      <Box width={'100%'}>
        {category.category &&
          category.category.length > 0 &&
          category.category.map((item, index) => {
            return (
              <Accordion
                expanded={expanded === index}
                onChange={handleChange(index)}
              >
                <AccordionSummary aria-controls={index} id={index}>
                  <Link
                    component={'a'}
                    href={`/product?cat_id=${item.id}`}
                    underline="none"
                    style={{ color: 'black' }}
                  >
                    <Typography>{item.name}</Typography>
                  </Link>
                </AccordionSummary>
                <List>
                  {item.Subcategories !== undefined &&
                    item.Subcategories.length > 0 &&
                    item.Subcategories.map((sub) => {
                      return (
                        <ListItem disablePadding>
                          <ListItemButton
                            style={{ textAlign: 'center' }}
                            component="a"
                            href={`/product?sub_cat_id=${sub.id}`}
                          >
                            <ListItemText primary={sub.name} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                </List>
              </Accordion>
            );
          })}
      </Box>
      <Box display={{ xs: 'none', sm: 'block' }}>
        <Typography variant="h4" sx={{ px: 2, textAlign: 'center', m: 3 }}>
          Hot Items
        </Typography>
        <Box sx={{ width: '100%', m: 2 }}>
          <Carousel
            showDots={true}
            arrows={true}
            infinite={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
          >
            {hotItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: '100%',
                }}
              >
                <Link href={`/product-details?product_id=${item.id}`}>
                  <img
                    src={item.link}
                    className={`${homeCss.zoom}`}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Link>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default ProductSideBar;
