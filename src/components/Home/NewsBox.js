import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const NewsBox = (props) => {
  return (
    <div style={{ width: '90%', margin: 'auto', display: 'block' }}>
      <Carousel
        showDots={true}
        arrows={false}
        infinite={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
      >
        {props.items.map((item, idx) => (
          <Card key={idx} className="m-2">
            <Card.Body>
              <Card.Title className="mb-4">{item.title}</Card.Title>
              <Card.Text className="text-secondary">
                {item.description}
              </Card.Text>
              <Card.Text className="fw-bold">{item.date}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

NewsBox.propTypes = {};

export default NewsBox;
