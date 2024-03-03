import Accordion from 'react-bootstrap/Accordion';
import uuid from 'react-uuid';

const Accordions = (props) => {
  return (
    <Accordion
      className="w-100 col-md-2 mb-md-0 mb-3 text-start d-sm-block d-md-none"
      style={{
        '--bs-accordion-btn-color': 'none',
        '--bs-accordion-bg': '#212529',
        '--bs-accordion-border-color': 'none',
        '--bs-accordion-active-bg': 'none',
        '--bs-accordion-active-color': '#ffffff',
        '--bs-accordion-btn-focus-border-color': 'none',
        '--bs-accordion-color': '#ffffff',
      }}
    >
      <Accordion.Item eventKey={uuid()}>
        <Accordion.Header className="text-uppercase">
          {props.title}
        </Accordion.Header>
        <Accordion.Body>
          <ul className="list-unstyled mt-md-4">
            {props.list.length > 0 &&
              props.list.map((item) => {
                return (
                  <li key={uuid()}>
                    <a
                      href={item.link}
                      className="text-secondary text-decoration-none"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Accordions;
