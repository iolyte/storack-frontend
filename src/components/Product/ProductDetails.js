import homeCss from '@/styles/Home.module.css';
import { Box, Grid, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductSideBar from './ProductSideBar';
import Button from '@mui/material/Button';
import { useState } from 'react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 767, min: 0 },
    items: 3,
  },
};

const ProductDetails = (props) => {
  const [imageLink, setImageLink] = useState('/assets/Images/video-2.jpg');
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
    {
      name: 'box-4',
      link: '/assets/Images/box-4.jpg',
    },
    {
      name: 'box-4',
      link: '/assets/Images/box-4.jpg',
    },
    {
      name: 'box-4',
      link: '/assets/Images/box-4.jpg',
    },
    {
      name: 'box-4',
      link: '/assets/Images/box-4.jpg',
    },
  ];
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography variant="h2" textAlign={'center'}>
            Product
          </Typography>
          <ProductSideBar />
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <img src={imageLink} width="100%" height="100%" />
              </Box>
              <Box sx={{ width: '100%' }} m={1}>
                <Carousel
                  showDots={false}
                  arrows={true}
                  infinite={true}
                  responsive={responsive}
                  autoPlay={false}
                  keyBoardControl={true}
                >
                  {topPicks.map((item, index) => (
                    <Box key={index}>
                      <img
                        src={item.link}
                        className={`${homeCss.zoom}`}
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                        onClick={() => setImageLink(item.link)}
                      />
                    </Box>
                  ))}
                </Carousel>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">
                MZG Wire Storage Shelving 3-Tier, White
              </Typography>
              <br />
              <Typography>
                【Multifunctional Versatility】The storage shelves (12"D x 18"W
                x 26"H) are suitable for room, balcony kitchen, office, and
                garage shelving scenarios.
              </Typography>
              <br />
              <Typography>
                【Multifunctional Versatility】The storage shelves (12"D x 18"W
                x 26"H) are suitable for room, balcony kitchen, office, and
                garage shelving scenarios.
              </Typography>
              <br />
              <Typography>
                【Multifunctional Versatility】The storage shelves (12"D x 18"W
                x 26"H) are suitable for room, balcony kitchen, office, and
                garage shelving scenarios.
              </Typography>
              <br />
              <br />
              <Button
                style={{ margin: '5px' }}
                color="info"
                variant="contained"
                size="large"
              >
                Shop on Amazon
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
