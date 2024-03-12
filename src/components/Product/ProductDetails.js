import homeCss from '@/styles/Home.module.css';
import { Box, Grid, Typography, Button } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductSideBar from './ProductSideBar';
import { useEffect, useState } from 'react';
import { WhatsApp } from '@mui/icons-material';

import { useSearchParams } from 'next/navigation';
import { productDetails } from '@/pages/api/product';
import parse from 'html-react-parser';
import Breadcrumb from '../breadcrumb';

import { ContactDetails } from '@/pages/api/contact';

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const LIVE_URL = process.env.NEXT_PUBLIC_LIVE_URL;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  },
};
const ProductDetails = (props) => {
  const [imageLink, setImageLink] = useState();
  const [productDetail, setProductDetail] = useState({});

  const searchParams = useSearchParams();
  const pId = searchParams.get('product_id');
  const productId = pId !== null ? pId : 1;
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const product = async (id) => {
    const res = await productDetails(id);
    setProductDetail(res.products);
    setImageLink(res.products?.images[0]);
  };

  useEffect(() => {
    product(productId);
  }, [productId]);

  const handleClick = (e) => {
    e.preventDefault();
    const phoneNumber = ContactDetails?.whatsAppNumber;
    const message = `Hi, I'm interested in this ${productDetail.name}.`;
    const imageUrl = `${LIVE_URL}/product-details?product_id=${productDetail.id}`;
    const productUrl = `${LIVE_URL}/product-details?product_id=${productDetail.id}`;

    const combinedMessage = `${message}\n\n (${productUrl})`;
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${combinedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const stringToHHtml =
    typeof productDetail?.description === 'string'
      ? parse(productDetail?.description)
      : productDetail?.description;
  return (
    <>
      <Box>
        <Breadcrumb
          secondaryTitle={`Product`}
          secondaryTitleLink="/product"
          label={`${productDetail?.name}`}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h4" textAlign={'center'}>
            Product
          </Typography>
          <ProductSideBar />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <img
                  src={`${base_url}/${imageLink}`}
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box sx={{ width: '100%', display: 'block' }} m={1}>
                <Carousel
                  showDots={false}
                  arrows={true}
                  infinite={true}
                  responsive={responsive}
                  autoPlay={false}
                  keyBoardControl={true}
                >
                  {productDetail?.images !== undefined &&
                    productDetail?.images.length > 0 &&
                    productDetail?.images.map((item, index) => (
                      <Box key={index} m={1}>
                        <img
                          src={`${base_url}/${item}`}
                          className={`${homeCss.zoom}`}
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                          onClick={() => setImageLink(item)}
                        />
                      </Box>
                    ))}
                </Carousel>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ m: { xs: 2, md: 0 }, p: { xs: 0, md: 2 } }}
            >
              <Box>
                <Typography variant="h4">{productDetail?.name}</Typography>
                <br />
                <Typography>{stringToHHtml}</Typography>
                <br />
              </Box>

              <Button
                onClick={handleClick}
                variant="contained"
                size="large"
                startIcon={<WhatsApp />}
                sx={{
                  mb: 0,
                  backgroundColor: '#25d366',
                  color: 'white',
                  textTransform: 'Capitalize',
                  '&:hover': {
                    backgroundColor: '#128C7E',
                  },
                }}
              >
                Inquiry on WhatsApp
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
