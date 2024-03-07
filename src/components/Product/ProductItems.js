import homeCss from '@/styles/Home.module.css';
import { Box, Grid, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import 'react-multi-carousel/lib/styles.css';
import ProductSideBar from './ProductSideBar';
import React, { useEffect, useState } from 'react';
import { allProduct } from '@/pages/api/product';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const ProductItem = (props) => {
  const [productDetails, setProductDetails] = useState({});
  const [page, setPage] = useState(1);
  const [productCount, setProductCount] = useState(0);

  const searchParams = useSearchParams();
  const subCatId = searchParams.get('sub_cat_id');
  const catId = searchParams.get('cat_id');
  const subcategoryId = subCatId !== null ? subCatId : null;
  const categoryId = catId !== null ? catId : null;

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const handleChange = (event, value) => {
    setPage(value);
    getAllProduct(value, '', categoryId, subcategoryId);
  };

  useEffect(() => {
    getAllProduct(page, '', categoryId, subcategoryId);
  }, [page, categoryId, subcategoryId]);

  const getAllProduct = async (
    page = 1,
    searchItem = '',
    categoryId = null,
    subcategoryId = null
  ) => {
    const res = await allProduct(page, searchItem, categoryId, subcategoryId);
    setProductDetails(res);
    setProductCount(res.count);
  };

  const totalPage = Math.ceil(productCount / productDetails.pageSize);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3}>
          <ProductSideBar />
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Grid container spacing={2} sx={{ mr: 1 }}>
            {productDetails.products && productDetails.products.length > 0 ? (
              productDetails.products.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{ mx: { xs: 2, sm: 0 } }}
                  >
                    <Link
                      href={`/product-details?product_id=${item.id}`}
                      underline="none"
                    >
                      <Box
                        sx={{
                          p: 3,
                          border: '1px solid',
                          borderRadius: 2,
                          borderColor: 'gray',
                        }}
                      >
                        <Typography
                          textAlign={'center'}
                          sx={{ mb: 2 }}
                          style={{ color: 'black' }}
                        >
                          {item.name}
                        </Typography>
                        <img
                          src={`${base_url}/${item.images[0]}`}
                          width="100%"
                          height="100%"
                        />
                      </Box>
                    </Link>
                  </Grid>
                );
              })
            ) : (
              <Box
                sx={{
                  margin: 'auto',
                }}
              >
                <img
                  src={'/assets/Images/no-product.png'}
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            )}
          </Grid>
          {productDetails.products && productDetails.products.length > 0 && (
            <Stack spacing={2} sx={{ py: 3 }}>
              <Pagination
                count={totalPage}
                style={{ margin: 'auto' }}
                onChange={handleChange}
              />
            </Stack>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ProductItem;
