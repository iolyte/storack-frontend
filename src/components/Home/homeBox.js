import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import homeCss from '@/styles/Home.module.css';

const HomeBox = (prop) => {
  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <CardGroup>
        {prop.items.map((item, index) => (
          <Card
            key={index}
            className="m-2"
            style={{ border: '0', backgroundColor: 'transparent' }}
          >
            <Card.Img src={item.link} className={`${homeCss.zoom} mb-5`} />
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

HomeBox.propTypes = {};

export default HomeBox;
