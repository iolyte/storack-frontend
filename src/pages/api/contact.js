import Axios from 'axios';
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export const ContactDetails = {
  telephone: '+91 90330 88222',
  whatsAppNumber: '+91 90330 88222',
  email: 'storackindiaoverseas@gmail.com',
  address:
    'Rajkot, Gujarat, India',
};

export const socialLinks = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://twitter.com/',
  youtube: 'https://www.youtube.com/',
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
