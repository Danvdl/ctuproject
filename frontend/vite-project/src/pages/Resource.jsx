// src/pages/Resource.js

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import './Resource.css';
import { useMutation, gql } from '@apollo/client';

const UPLOAD_RESOURCE = gql`
  mutation UploadResource($file_name: String!, $file_path: String!, $file_type: String!) {
    uploadResource(file_name: $file_name, file_path: $file_path, file_type: $file_type) {
      resource_id
      file_name
    }
  }
`;

const Resource = () => {
  const [uploadResource] = useMutation(UPLOAD_RESOURCE);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use form data or another method to handle file uploads
    const fileInput = e.target.elements.document.files[0];
    if (fileInput) {
      const file_name = fileInput.name;
      const file_path = `uploads/${fileInput.name}`; // Adjust path according to your backend
      const file_type = fileInput.type;

      uploadResource({ variables: { file_name, file_path, file_type } });
    }
  };

  return (
    <div>
      <Navigation />
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
            <Form id="uploadForm" onSubmit={handleSubmit}>
              <Form.Group controlId="fileInput" className="mb-3">
                <Form.Label>Select a file:</Form.Label>
                <Form.Control type="file" name="document" required />
              </Form.Group>
              <Button type="submit" variant="primary">Upload</Button>
            </Form>
          </Col>
        </Row>

        <Footer />
      </Container>
    </div>
  );
};

export default Resource;
