import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  TextField,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Typography,
  Paper,
} from '@mui/material';
import { allProduct } from '@/pages/api/product';
import { useRouter } from 'next/router';

const SearchProductDialog = ({ open, handleClose }) => {
  const router = useRouter();

  const [searchText, setSearchText] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([]);

  const getSearchProducts = async () => {
    const response = await allProduct(1, searchText, null, null, null);
    setSearchedProducts(response?.products);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchText !== '') {
      getSearchProducts();
    }
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%' } }}
      open={open}
      onClose={handleClose}
      scroll="paper"
    >
      {/* <DialogTitle>What are you looking for?</DialogTitle> */}
      <DialogContent>
        <DialogContentText>
          Search for products, brands and more
        </DialogContentText>

        <TextField
          autoFocus
          required
          margin="dense"
          id="search"
          name="search"
          label="Search"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Subscribe</Button>
      </DialogActions> */}
      <Paper
        sx={{
          p: 2,
        }}
      >
        {searchedProducts?.map((product, index) => {
          return (
            <List sx={{ bgcolor: 'background.paper' }}>
              <Box
                onClick={() => {
                  handleClose();
                  router.push(`/product-details?product_id=${product?.id}`);
                }}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'grey.200',
                  },
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt={product?.name}
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/${product?.images[0]}`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product?.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {product?.Category?.name}
                        </Typography>
                        {` — ${product?.Subcategory?.name}`}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </Box>
              {!!(searchedProducts.length != index + 1) && (
                <Divider variant="fullWidth" component="li" />
              )}
            </List>
          );
        })}
      </Paper>
    </Dialog>
  );
};

export default SearchProductDialog;
