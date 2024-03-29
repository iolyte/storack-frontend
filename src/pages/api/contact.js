import Axios from 'axios';
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export const ContactDetails = {
  telephone: '123-456-7890',
  email: 'support.storack@gmail.com',
  address:
    '2nd Floor, 1st Building, No. 188, East Road, Ahmadabad, Gujarat, India',
};

export const contactUsForm = async (bodyData) => {
  let res = {
    status: 0,
    message: '',
  };

  await Axios.post(`${base_url}/pub/contact-us`, bodyData).then(
    (response) => {
      res = {
        status: response.code,
        message: response.data.message,
      };
    },
    (error) => {
      res = {
        status: error.code,
        message: error.message || error,
      };
      console.log(error);
    }
  );
  return res;
};
