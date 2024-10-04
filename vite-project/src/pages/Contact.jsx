
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us!</p>
          <p>Freek Schaefer: 20230806@ctucareer.co.za | Phone: 0662700601</p>
          <p>Anro Pace: 20241238@ctucareer.co.za | Phone: 0767975880</p>
          <p>Janco Geldenhuys: 20240225@ctucareer.co.za | Phone: 0791937373</p>
        </Col>
        <Col md={6}>
          <h2>Get in Touch</h2>
          <Form>
            <Form.Group controlId="contactName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="contactEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
