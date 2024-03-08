import ProductDetails from '@/components/Product/ProductDetails';
import { Box } from '@mui/material';
import Image from 'next/legacy/image';
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
          height: { xs: '30vh', sm: '70vh', md: '90vh' },
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
      <ProductDetails />
    </>
  );
};

export default ProductDetail;
