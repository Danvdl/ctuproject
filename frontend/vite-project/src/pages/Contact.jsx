import { useState } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import Navigation from '../components/Navbar';  // Navbar for consistency
import Footer from '../components/Footer';  // Footer for consistency
import './Contact.css';  // Link to custom CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    handleClose();
  };

  return (
    <div>
      <Navigation />
      <Container className="contact-container">
        <Row className="text-center my-5">
          <Col>
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us by clicking the button below!</p>
            <Button variant="primary" onClick={handleOpen} className="contact-button">Contact Us</Button>
          </Col>
        </Row>

        <Row className="my-5 contact-details justify-content-center">
          <Col md={6}>
            <h2>Our Team</h2>
            <p><strong>Freek Schaefer</strong>: 20230806@ctucareer.co.za | Phone: 066 270 0601</p>
            <p><strong>Anro Pace</strong>: 20241238@ctucareer.co.za | Phone: 076 797 5880</p>
            <p><strong>Janco Geldenhuys</strong>: 20240225@ctucareer.co.za | Phone: 079 193 7373</p>
          </Col>
        </Row>

        {/* Contact Form Popup */}
        <div className={`contact-popup ${showPopup ? 'active' : ''}`}>
          <h2>Get in Touch</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="contactName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name" 
                required 
              />
            </Form.Group>
            <Form.Group controlId="contactEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email" 
                required 
              />
            </Form.Group>
            <Form.Group controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4} 
                placeholder="Your message" 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">Submit</Button>
          </Form>
          <Button variant="secondary" onClick={handleClose} className="close-button">Close</Button>
        </div>

      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
