import React from 'react';
import Image from 'next/legacy/image';
import { Box, Grid } from '@mui/material';
import ProductItem from '@/components/Product/ProductItems';
import Breadcrumb from '@/components/breadcrumb';

const Product = () => {
  const videoDetails = [
    {
      title: 'Electronic Industry',
      imageUrl: '/assets/Images/video-1.jpg',
    },
    {
      title: 'Retail Industry',
      imageUrl: '/assets/Images/video-2.jpg',
    },
  ];
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
        <Breadcrumb secondaryTitle="Product" secondaryTitleLink="/product" />
      </Box>
      <Box sx={{ my: 3 }}>
        <Grid container spacing={0}>
          {videoDetails.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  width: '100%',
                  height: '50vh',
                  position: 'relative',
                }}
                key={index}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  priority={true}
                  layout="fill" // This ensures that the image takes up 100% of its parent container
                  objectFit="cover" // This ensures that the image covers the entire container while maintaining its aspect ratio
                  style={{ margin: '10px' }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <ProductItem />
    </>
  );
};

export default Product;
