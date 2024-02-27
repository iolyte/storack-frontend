import homeCss from '@/styles/Home.module.css';

const BannerImage = (props) => {
  let className = `${homeCss.text}`;
  if (props.item.borderVisible === true) {
    className = `${homeCss.text} ${homeCss['border-visible']}`;
  }
  return (
    <div className="position-relative mb-5 mt-2">
      <img src={props.item.link} alt={props.item.name} className="w-100" />
      <div className={className}>
        <h6>{props.item.description}</h6>
        <h1>{props.item.title}</h1>
        <button>View more</button>
      </div>
    </div>
  );
};

BannerImage.propTypes = {};

export default BannerImage;