import homeCss from '@/styles/Home.module.css';
import { Box, Grid, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import 'react-multi-carousel/lib/styles.css';
import ProductSideBar from './ProductSideBar';

const ProductItem = (props) => {
  const videoDetails = [
    {
      title: 'Electronic Industry',
      imageUrl: '/assets/Images/video-1.jpg',
      link: '/product-details',
    },
    {
      title: 'Retail Industry',
      imageUrl: '/assets/Images/video-2.jpg',
      link: '/product-details',
    },
    {
      title: 'Electronic Industry',
      imageUrl: '/assets/Images/video-1.jpg',
      link: '/product-details',
    },
    {
      title: 'Retail Industry',
      imageUrl: '/assets/Images/video-2.jpg',
      link: '/product-details',
    },
    {
      title: 'Electronic Industry',
      imageUrl: '/assets/Images/video-1.jpg',
      link: '/product-details',
    },
    {
      title: 'Retail Industry',
      imageUrl: '/assets/Images/video-2.jpg',
      link: '/product-details',
    },
    {
      title: 'Electronic Industry',
      imageUrl: '/assets/Images/video-1.jpg',
      link: '/product-details',
    },
    {
      title: 'Retail Industry',
      imageUrl: '/assets/Images/video-2.jpg',
      link: '/product-details',
    },
    {
      title: 'Electronic Industry',
      imageUrl: '/assets/Images/video-1.jpg',
      link: '/product-details',
    },
    {
      title: 'Retail Industry',
      imageUrl: '/assets/Images/video-2.jpg',
      link: '/product-details',
    },
    {
      title: 'Electronic Industry',
      imageUrl: '/assets/Images/video-1.jpg',
      link: '/product-details',
    },
    {
      title: 'Retail Industry',
      imageUrl: '/assets/Images/video-2.jpg',
      link: '/product-details',
    },
    {
      title: 'Electronic Industry',
      imageUrl: '/assets/Images/video-1.jpg',
      link: '/product-details',
    },
    {
      title: 'Retail Industry',
      imageUrl: '/assets/Images/video-2.jpg',
      link: '/product-details',
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ProductSideBar />
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {videoDetails.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Link href={item.link} underline="none">
                    <Box
                      sx={{
                        p: 3,
                        border: '1px solid',
                        borderRadius: 2,
                        borderColor: 'gray',
                      }}
                    >
                      <Typography textAlign={'center'} sx={{ mb: 2 }}>
                        {item.title}
                      </Typography>
                      <img src={item.imageUrl} width="100%" height="100%" />
                    </Box>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
          <Stack spacing={2} sx={{ py: 3 }}>
            <Pagination count={10} style={{ margin: 'auto' }} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductItem;
