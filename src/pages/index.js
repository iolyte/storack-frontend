import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Typography } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });
import image1 from '../../public/assets/Images/slider-1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import HomeBox from '@/components/Home/homeBox';
import HomeImage from '@/components/Home/homeImage';

export default function Home() {
  const sliderImage = [
    {
      name: 'slider-1',
      link: '/assets/Images/slider-1.jpg',
    },
    {
      name: 'slider-2',
      link: '/assets/Images/slider-2.jpg',
    },
    {
      name: 'slider-3',
      link: '/assets/Images/slider-3.jpg',
    },
    {
      name: 'slider-4',
      link: '/assets/Images/slider-4.jpg',
    },
  ];

  const topPicks = [
    {
      name: 'box-1',
      link: '/assets/Images/box-1.jpg',
    },
    {
      name: 'box-2',
      link: '/assets/Images/box-2.jpg',
    },
    {
      name: 'box-3',
      link: '/assets/Images/box-3.jpg',
    },
    {
      name: 'box-4',
      link: '/assets/Images/box-4.jpg',
    },
  ];

  const image = {
    name: 'img',
    link: '/assets/Images/tumb-1.jpg',
    title: 'LIVING ROOM STORAGE',
    description: 'Storage Make the space more valuable',
    borderVisible: false,
  };

  return (
    <>
      <Carousel data-bs-theme="dark" controls={false}>
        {sliderImage.map((item) => {
          return (
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={item.link} text={item.name} />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <h4 className="text-center text-secondary m-5">Top Pick</h4>
      <HomeBox items={topPicks} />
      <HomeImage item={image} />
    </>
  );
}
