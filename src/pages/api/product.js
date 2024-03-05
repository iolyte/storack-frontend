const axios = require('axios');
import React from 'react';
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export const allProduct = async (
  page = 1,
  searchItem = '',
  categoryId = null,
  subcategoryId = null,
  pageSize = 16,
  isHotProduct = false,
  isTopProduct = false
) => {
  const config = {
    categoryId: categoryId,
    subcategoryId: subcategoryId,
    searchTerm: searchItem,
    page: page,
    pageSize: pageSize,
    orderColumn: 'id',
    orderByAsc: true,
  };
  let res = {
    count: 0,
    products: [],
    status: '',
    message: '',
    pageSize: 16,
  };
  await axios.post(`${base_url}/pub/getallproduct`, config).then(
    (response) => {
      res = {
        count: response.data.data.count,
        products: response.data.data.rows,
        status: response.code,
        message: '',
        pageSize: 16,
      };
    },
    (error) => {
      res = {
        count: 0,
        products: [],
        status: error.code,
        message: error,
        pageSize: 16,
      };
      console.log(error);
    }
  );
  return res;
};

export const productDetails = async (id) => {
  let res = {
    products: {},
    status: '',
    message: '',
  };
  await axios.get(`${base_url}/pub/getproduct/${id}`).then(
    (response) => {
      res = {
        products: response.data.data,
        status: response.code,
        message: '',
      };
    },
    (error) => {
      res = {
        message: error,
      };
      console.log(error);
    }
  );
  return res;
};

export const getAllCategory = async () => {
  let res = {
    category: [],
    status: '',
    message: '',
  };
  await axios.get(`${base_url}/pub/getallcategorywithsubcategory`).then(
    (response) => {
      res = {
        category: response.data.data.allCategoryWithSubCategory,
        status: response.code,
        message: '',
      };
    },
    (error) => {
      res = {
        message: error,
      };
      console.log(error);
    }
  );
  return res;
};
