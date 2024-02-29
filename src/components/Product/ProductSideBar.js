import { Box, Grid, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Carousel from 'react-multi-carousel';
import homeCss from '@/styles/Home.module.css';

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

const ProductSideBar = () => {
  const cat = [
    {
      mainCat: 'Test',
      link: '#',
    },
    {
      mainCat: 'Test1',
      link: '#',
    },
    {
      mainCat: 'Test',
      link: '#',
    },
    {
      mainCat: 'Test1',
      link: '#',
    },
    {
      mainCat: 'Test',
      link: '#',
    },
    {
      mainCat: 'Test1',
      link: '#',
    },
  ];

  const topPicks = [
    {
      name: 'box-1',
      link: '/assets/Images/box-1.jpg',
    },
    {
      name: 'box-2',
      link: '/assets/Images/box-2.jpg',
    },
    {
      name: 'box-3',
      link: '/assets/Images/box-3.jpg',
    },
    {
      name: 'box-4',
      link: '/assets/Images/box-4.jpg',
    },
  ];
  return (
    <>
      <List>
        {cat.map((item) => {
          return (
            <ListItem disablePadding>
              <ListItemButton component="a" href={item.link}>
                <ListItemText primary={item.mainCat} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Typography variant="h4" sx={{ px: 2, textAlign: 'center' }}>
        Hot Items
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Carousel
          showDots={true}
          arrows={true}
          infinite={true}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
        >
          {topPicks.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
              }}
            >
              <img
                src={item.link}
                className={`${homeCss.zoom}`}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default ProductSideBar;
