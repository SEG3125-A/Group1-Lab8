import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const services = [
  {
    id: 1,
    title: 'Apple products repair',
    description: 'Look into the issue and repair to our best abilities. This includes, Iphones, Ipad, Macbooks',
  },
  {
    id: 2,
    title: 'Windows Laptops and PCs',
    description: 'Repair and replace parts for your windows laptop or PC',
  },
  {
    id: 3,
    title: 'Android device',
    description: 'High quality screen, battery, camera, etc... repairs. This is also included for Android tablets ',
  },
];

function Services() {
  return (
    <div className='online-booking-container'>
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <Col key={service.id}>
              <Card className='service-card'>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>
                    {service.description}
                  </Card.Text>
                  <Button className="service-btn" variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
     </div> 
  );
}

export default Services;
