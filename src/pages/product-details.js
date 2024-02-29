import ProductDetails from '@/components/Product/ProductDetails';
import ProductSideBar from '@/components/Product/ProductSideBar';
import Breadcrumb from '@/components/breadcrumb';
import homeCss from '@/styles/Home.module.css';
import { Box, Grid, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { textAlign } from '@mui/system';
import Image from 'next/legacy/image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

const ProductDetail = (props) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '70vh',
          position: 'relative',
        }}
      >
        <Image
          src={'/assets/Images/product_banner.jpg'}
          alt={'Product Banner Image'}
          layout="fill" // This ensures that the image takes up 100% of its parent container
          objectFit="cover" // This ensures that the image covers the entire container while maintaining its aspect ratio
        />
      </Box>
      <Box>
        <Breadcrumb
          secondaryTitle="Product > Cat > Name"
          secondaryTitleLink="/product/cat/name"
        />
      </Box>
      <ProductDetails />
      {/* <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography variant="h2" textAlign={'center'}>
            Product
          </Typography>
          <ProductSideBar />
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                sx={{
                  width: '100%',
                  // height: '70vh',
                  position: 'relative',
                }}
              >
                <Image
                  src={'/assets/Images/advantage-1.jpg'}
                  alt={'Product Banner Image'}
                  layout="fill" // This ensures that the image takes up 100% of its parent container
                  objectFit="cover" // This ensures that the image covers the entire container while maintaining its aspect ratio
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </>
  );
};

export default ProductDetail;
