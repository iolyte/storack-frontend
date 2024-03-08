import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import ProductBox from '@/components/Home/ProductBox';
import BannerImage from '@/components/Home/BannerImage';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MultiImagesBanner from '@/components/Home/MultiImagesBanner';
import CountersSection from '@/components/AboutUs/countersSection';
import homeCss from '@/styles/Home.module.css';
import uuid from 'react-uuid';
import NewsBox from '@/components/Home/NewsBox';
import Button from 'react-bootstrap/Button';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ABOUT_US } from '@/utils/constents';
import Link from 'next/link';
import { Typography, Box } from '@mui/material';
import { getHomePageProducts } from './api/product';
import { useEffect, useState } from 'react';

export default function Home() {
  const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const sliderImage = [
    {
      name: 'slider-1',
      link: '/assets/Images/home_slide_1.png',
      text: 'We take pride in offering a wide array of cutting-edge storage solutions, meticulously designed to cater to your diverse needs.',
    },
    {
      name: 'slider-2',
      link: '/assets/Images/home_slide_2.png',
      text: 'Experience the Ease of One-Stop Storage Solutions with our company`s Design, Production, Sales, and After-sales services.',
    },
    {
      name: 'slider-3',
      link: '/assets/Images/home_slide_3.jpg',
      text: 'Our vision: To be a professional leader and the foremost storage service provider in the industry',
    },
    {
      name: 'slider-4',
      link: '/assets/Images/home_slide_4.jpg',
      text: 'We offer an extensive array of OEM/ODM storage product solutions for the homes, industrial spaces, and commercial establishments.',
    },
  ];

  const livingRoomStorageImage = {
    name: 'Living Room Storage',
    link: '/assets/Images/Home/living-room.jpg',
    title: 'LIVING ROOM STORAGE',
    description: 'Storage Make the space more valuable',
    borderVisible: false,
  };

  const bathroomStorageImage = {
    name: 'Bathroom Storage',
    link: '/assets/Images/Home/bathroom-storage.jpg',
    title: 'BATHROOM STORAGE',
    description: 'Storage Make the space more valuable',
    borderVisible: true,
  };

  const warehouseStorageImage = {
    name: 'Warehouse Storage',
    link: '/assets/Images/Home/warehouse-storage.jpg',
    title: 'WAREHOUSE STORAGE',
    description: 'Storage Make the space more valuable',
    borderVisible: false,
  };

  const industrialStorageImage = {
    name: 'Industrial Storage',
    link: '/assets/Images/Home/industrial-storage.jpg',
    title: 'INDUSTRIAL STORAGE',
    description: 'Storage Make the space more valuable',
    borderVisible: true,
  };

  const garageStorageImage = {
    name: 'Garage Storage',
    link: '/assets/Images/Home/garage-storage.jpg',
    title: 'GARAGE STORAGE',
    description: 'Storage Make the space more valuable',
    borderVisible: false,
  };

  const ImageList = [
    {
      name: 'img',
      link: '/assets/Images/tumb-1.jpg',
      title: 'LIVING ROOM STORAGE',
      description: 'Storage Make the space more valuable',
    },
    {
      name: 'img',
      link: '/assets/Images/tumb-1.jpg',
      title: 'LIVING ROOM STORAGE',
      description: 'Storage Make the space more valuable',
    },
  ];

  const news = [
    {
      title:
        '2020-04-05 Won the honor of "Assessment of the Integration of Industrialization and Industriali',
      description:
        'In April 2020, Midea High-Tech Co., Ltd. (hereinafter referred to as "Mizhigao") successfully passed the system certification of the Ministry of Indus...',
      date: '2023-03-06',
    },
    {
      title:
        '2020-04-05 Won the honor of "Assessment of the Integration of Industrialization and Industriali',
      description:
        'In April 2020, Midea High-Tech Co., Ltd. (hereinafter referred to as "Mizhigao") successfully passed the system certification of the Ministry of Indus...',
      date: '2023-03-06',
    },
    {
      title:
        '2020-04-05 Won the honor of "Assessment of the Integration of Industrialization and Industriali',
      description:
        'In April 2020, Midea High-Tech Co., Ltd. (hereinafter referred to as "Mizhigao") successfully passed the system certification of the Ministry of Indus...',
      date: '2023-03-06',
    },
    {
      title:
        '2020-04-05 Won the honor of "Assessment of the Integration of Industrialization and Industriali',
      description:
        'In April 2020, Midea High-Tech Co., Ltd. (hereinafter referred to as "Mizhigao") successfully passed the system certification of the Ministry of Indus...',
      date: '2023-03-06',
    },
  ];

  const [topPicks, setTopPicks] = useState([]);
  const [leavingRoomStorage, setLeavingRoomStorage] = useState([]);
  const [bathroomStorage, setBathroomStorage] = useState([]);
  const [warehouseStorage, setWarehouseStorage] = useState([]);
  const [industrialStorage, setIndustrialStorage] = useState([]);
  const [garageStorage, setGarageStorage] = useState([]);

  const getProductData = async () => {
    const response = await getHomePageProducts();
    console.log('response: ', response);
    if (response.status === 200) {
      const tempTopPicks = response?.products?.topProducts?.map((item) => {
        return {
          name: item.name,
          link: `${IMAGE_BASE_URL}${item?.images[0]}`,
          redirectURL: `/product-details?product_id=${item.id}`,
        };
      });

      const tempLeavingRoomStorage =
        response?.products?.leavingRoomStorage?.map((item) => {
          return {
            name: item.name,
            link: `${IMAGE_BASE_URL}${item?.images[0]}`,
            redirectURL: `/product-details?product_id=${item.id}`,
          };
        });

      const tempBathroomStorage = response?.products?.bathroomStorage?.map(
        (item) => {
          return {
            name: item.name,
            link: `${IMAGE_BASE_URL}${item?.images[0]}`,
            redirectURL: `/product-details?product_id=${item.id}`,
          };
        }
      );

      const tempWarehouseStorage = response?.products?.warehouseStorage?.map(
        (item) => {
          return {
            name: item.name,
            link: `${IMAGE_BASE_URL}${item?.images[0]}`,
            redirectURL: `/product-details?product_id=${item.id}`,
          };
        }
      );

      const tempIndustrialStorage = response?.products?.industrialStorage?.map(
        (item) => {
          return {
            name: item.name,
            link: `${IMAGE_BASE_URL}${item?.images[0]}`,
            redirectURL: `/product-details?product_id=${item.id}`,
          };
        }
      );

      const tempGarageStorage = response?.products?.garageStorage?.map(
        (item) => {
          return {
            name: item.name,
            link: `${IMAGE_BASE_URL}${item?.images[0]}`,
            redirectURL: `/product-details?product_id=${item.id}`,
          };
        }
      );

      setTopPicks(tempTopPicks);
      setLeavingRoomStorage(tempLeavingRoomStorage);
      setBathroomStorage(tempBathroomStorage);
      setWarehouseStorage(tempWarehouseStorage);
      setIndustrialStorage(tempIndustrialStorage);
      setGarageStorage(tempGarageStorage);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Carousel data-bs-theme="dark" controls={false}>
        {sliderImage.map((item) => {
          return (
            <Carousel.Item interval={3000} key={uuid()}>
              <img
                className="d-block w-100 h-80"
                src={item.link}
                text={item.name}
              />
              {/* <Carousel.Caption>
                <div className="square-card">
                  <Typography>{item.text}</Typography>
                </div>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
      <ProductBox items={topPicks} title="Top Pick" />
      <BannerImage item={livingRoomStorageImage} />
      <AnimationOnScroll animateIn={homeCss.mainClass} animateOnce>
        <ProductBox
          items={leavingRoomStorage}
          title="Living room Storage Solution"
        />
      </AnimationOnScroll>
      <BannerImage item={bathroomStorageImage} />
      <AnimationOnScroll animateIn={homeCss.mainClass} animateOnce>
        <ProductBox items={bathroomStorage} title="Bathroom Storage Solution" />
      </AnimationOnScroll>
      <BannerImage item={warehouseStorageImage} />
      <AnimationOnScroll animateIn={homeCss.mainClass} animateOnce>
        <ProductBox
          items={warehouseStorage}
          title="Warehouse Storage Solution"
        />
      </AnimationOnScroll>
      {/* <Row className="m-0">
        {ImageList.map((item) => {
          return (
            <Col className="p-0" key={uuid()}>
              <MultiImagesBanner item={item} />
            </Col>
          );
        })}
      </Row> */}
      <BannerImage item={industrialStorageImage} />
      <AnimationOnScroll animateIn={homeCss.mainClass} animateOnce>
        <ProductBox
          items={industrialStorage}
          title="Industrial Storage Solution"
        />
      </AnimationOnScroll>
      <BannerImage item={garageStorageImage} />
      <AnimationOnScroll animateIn={homeCss.mainClass} animateOnce>
        <ProductBox items={garageStorage} title="Garage Storage Solution" />
      </AnimationOnScroll>
      {/* <Row className="m-0">
        {ImageList.map((item) => {
          return (
            <Col className="p-0" key={uuid()}>
              <MultiImagesBanner item={item} />
            </Col>
          );
        })}
      </Row> */}
      <AnimationOnScroll animateIn={homeCss.mainClass} animateOnce>
        <h1 className="text-center">About Storack India</h1>
        <hr />
        <Row className="mb-5">
          <Col sm={12} md={6} style={{ margin: 'auto' }}>
            <img
              src="/assets/Images/office-2.jpg"
              width="100%"
              height="400px"
            />
          </Col>
          <Col sm={12} md={6}>
            <Box sx={{ m: 2 }}>
              <div className="m-md-2">
                <h4>Storack India Private Ltd.</h4>
                {ABOUT_US.map((para, index) => (
                  <p key={index} className="text-secondary">
                    {para}
                  </p>
                ))}
              </div>
              <br />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="/about-us">
                  <Button variant="dark" size="lg">
                    View More
                  </Button>
                </Link>
              </div>
            </Box>
          </Col>
        </Row>
      </AnimationOnScroll>
      {/* <AnimationOnScroll animateIn={homeCss.mainClass} animateOnce>
        <ProductBox items={topPicks} title="" />
      </AnimationOnScroll> */}
      <AnimationOnScroll animateIn={homeCss.mainClass} animateOnce>
        <div className="m-5">
          <CountersSection />
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn={homeCss.mainClass} animateOnce>
        <div className="position-relative mt-3 m-auto" style={{ width: '90%' }}>
          <img
            src="/assets/Images/home_partner.webp"
            width="100%"
            height="300px"
          />
          <div className="m-3">
            <div className={homeCss.text}>
              <h2 className="text-light">WELCOME TO BE OUR PARTNER</h2>
              <p className="text-light">
                Committed to be the professional leading organization & storage
                service provider.
              </p>
            </div>
          </div>
        </div>
        {/* <h1 className="text-center mt-5 mb-5">News</h1>
        <NewsBox items={news} /> */}
      </AnimationOnScroll>
      <div className="mb-5"></div>
    </div>
  );
}
