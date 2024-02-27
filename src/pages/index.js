import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import ProductBox from '@/components/Home/ProductBox';
import BannerImage from '@/components/Home/BannerImage';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MultiImagesBanner from '@/components/Home/MultiImagesBanner';
import CountersSection from '@/components/AboutUs/countersSection';
import homeCss from '@/styles/Home.module.css';
// import News from '@/components/Home/NewsBox';
import uuid from 'react-uuid';

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

  const image2 = {
    name: 'img',
    link: '/assets/Images/tumb-1.jpg',
    title: 'LIVING ROOM STORAGE',
    description: 'Storage Make the space more valuable',
    borderVisible: true,
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

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Carousel data-bs-theme="dark" controls={false}>
        {sliderImage.map((item) => {
          return (
            <Carousel.Item interval={3000} key={uuid()}>
              <img className="d-block w-100" src={item.link} text={item.name} />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <h4 className="text-center text-secondary m-3">Top Pick</h4>
      <ProductBox items={topPicks} />
      <BannerImage item={image} />
      <h4 className="text-center text-secondary m-3">
        Living room Storage Solution
      </h4>
      <ProductBox items={topPicks} />
      <BannerImage item={image2} />
      <h4 className="text-center text-secondary m-3">
        Bathroom Storage Solution
      </h4>
      <ProductBox items={topPicks} />
      <BannerImage item={image} />
      <h4 className="text-center text-secondary m-3">
        Warehouse Storage Solution
      </h4>
      <ProductBox items={topPicks} />
      <Row className="m-0">
        {ImageList.map((item) => {
          return (
            <Col className="p-0" key={uuid()}>
              <MultiImagesBanner item={item} />
            </Col>
          );
        })}
      </Row>
      <h4 className="text-center text-secondary m-3">
        Industrial Storage Solution
      </h4>
      <ProductBox items={topPicks} />
      <BannerImage item={image} />
      <h4 className="text-center text-secondary m-3">
        Garage Storage Solution
      </h4>
      <ProductBox items={topPicks} />
      <Row className="m-0">
        {ImageList.map((item) => {
          return (
            <Col className="p-0" key={uuid()}>
              <MultiImagesBanner item={item} />
            </Col>
          );
        })}
      </Row>
      <h1 className="text-center">About STORACK INDIA</h1>
      <hr />
      <Row className="mb-5">
        <Col style={{ margin: 'auto' }}>
          <img src="/assets/Images/tumb-1.jpg" width="100%" height="400px" />
        </Col>
        <Col>
          <h4>Shenzhen Meizhigao Technology Company Limited.</h4>
          <p className="text-secondary">
            Shenzhen Meizhigao Technology Company Limited (MZG) was founded in
            2002, which is a comprehensive enterprise focusing on product
            development, manufacturing, sales and service in creative DIY
            storage products. We are specialized in home storage range, and
            adhere to the concept of "customer-centric, market-oriented", based
            on production, technology innovation platform; continuously invest
            on development of creative technology and products. We have our own
            upgraded & creative storage product system; it meets demand from
            diﬀerent customers and consumers ﬂexibly. MZG also has a leading
            quality monitoring system, it obtained ISO9001 quality management
            system and NSF certiﬁcation of green environmentalprotection. MZG
            was listed on the market in China in 2015. It's one of the largest
            public companies in storage industry in China.
          </p>
          <p className="text-secondary">
            We have won the trust and cooperation from global customers with our
            constantly growing storage technology and innovation ability, good
            ﬂexible customization capabilities and professional after sale
            service. MZG also provide industry shelving business and family
            shelving service for LOWES, DOSHISHA, NITORI in Japan, E–MART in
            South Korea, Samsung and other well-known retailers, buyers, agents
            and customers from nearly 30 countries and regions. At present, MZG
            has become the leading organization & storage service provider.
          </p>
          <p className="text-secondary">
            We will keep working together with partners to build a green,
            intelligent, innovative on storage service system in the future, and
            to create a more warm, healthy, comfortable living and working
            environment.
          </p>
          <br />
          <button
            className="btn btn-dark"
            style={{ width: '200px', height: '50px', fontSize: '20px' }}
          >
            View More
          </button>
        </Col>
      </Row>
      <ProductBox items={topPicks} />
      <CountersSection />
      <div className="position-relative mt-3 m-auto" style={{ width: '90%' }}>
        <img src="/assets/Images/tumb-1.jpg" width="100%" height="200px" />
        <div className="m-3">
          <div className={homeCss.text} style={{ left: '20%' }}>
            <h2 className="text-light">WELCOME TO BE OUR PARTNER</h2>
            <p className="text-light">
              Committed to be the professional leading organization & storage
              service provider.
            </p>
          </div>
        </div>
      </div>
      {/* <h1 className="text-center mt-5 mb-5">News</h1> */}
      {/* <News items={news} /> */}
      <div className="mb-5"></div>
    </div>
  );
}
