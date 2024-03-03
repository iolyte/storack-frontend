import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import homeCss from '@/styles/Home.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

const ProductBox = (prop) => {
  return (
    <CardGroup className="m-auto d-block">
      <h4 className="text-center text-secondary m-3">{prop.title}</h4>
      <Carousel
        showDots={true}
        arrows={false}
        infinite={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
      >
        {prop.items.map((item, index) => {
          return (
            <Card
              key={index}
              className="m-2"
              style={{ border: '0', backgroundColor: 'transparent' }}
            >
              <Card.Img src={item.link} className={`${homeCss.zoom} mb-5`} />
            </Card>
          );
        })}
      </Carousel>
    </CardGroup>
  );
};

ProductBox.propTypes = {};

export default ProductBox;
