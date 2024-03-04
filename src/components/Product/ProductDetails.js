import homeCss from '@/styles/Home.module.css';
import { Box, Grid, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductSideBar from './ProductSideBar';
import { useEffect, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useSearchParams } from 'next/navigation';
import { productDetails } from '@/pages/api/product';
import parse from 'html-react-parser';
import Breadcrumb from '../breadcrumb';

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
  const [imageLink, setImageLink] = useState('/assets/Images/video-2.jpg');
  const [productDetail, setProductDetail] = useState({});
  const [messageDetails, setMessageDetails] = useState({
    phoneNumber: '+91 94278 22846',
    message: 'hello this is the test message',
    imageUrl: 'https://static.toiimg.com/photo/80387978.cms',
  });

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
    const { phoneNumber, message, imageUrl } = messageDetails;
    const combinedMessage = `${message}\n\n (${imageUrl})`;
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
            <Grid item xs={12} md={6}>
              <Typography variant="h4">{productDetail?.name}</Typography>
              <br />
              <Typography>{stringToHHtml}</Typography>
              <br />
              <BottomNavigationAction
                component="button"
                onClick={handleClick}
                label="Home"
                icon={
                  <WhatsAppIcon
                    color="success"
                    style={{ padding: 0, height: '50px', width: '50px' }}
                  />
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
