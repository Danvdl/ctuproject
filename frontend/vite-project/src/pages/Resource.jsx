import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navigation from '../components/Navbar';  // Navbar for consistency
import Footer from '../components/Footer';  // Footer for consistency
import './Resource.css';  // Custom CSS for styling

const Resource = () => {
  return (
    <div>
      <Navigation />  {/* Include the Navbar */}
      <Container fluid className="resource-container d-flex flex-column justify-content-center align-items-center">
        <Row className="text-center my-5">
          <Col>
            <h1 className="mb-4">Welcome to the Resource Page</h1>
            <p className="intro-text">
              Here you will find all of our resources such as videos, study guides,
              and books for different subjects that we offer.
            </p>
          </Col>
        </Row>

        <Row className="text-center my-5">
          <Col xs={12} md={6} className="upload-section">
            <h2>Upload Document</h2>
            <Form id="uploadForm" action="/upload" method="POST" enctype="multipart/form-data">
              <Form.Group controlId="fileInput" className="mb-3">
                <Form.Label>Select a file:</Form.Label>
                <Form.Control type="file" name="document" required />
              </Form.Group>
              <Button type="submit" variant="primary">Upload</Button>
            </Form>
          </Col>
        </Row>

        <Row className="text-center my-5">
          <Col xs={12} md={6} className="download-section">
            <h2>Download Documents</h2>
            <ul id="fileList" className="file-list">
              {/* Files will be listed here */}
            </ul>
          </Col>
        </Row>

        <Footer /> {/* Include the Footer */}
      </Container>
    </div>
  );
};

export default Resource;
