import { useState } from 'react';
import { Container, Form, Button, ListGroup, Row, Col } from 'react-bootstrap';
import Navigation from '../components/Navbar';  // Include Navbar component
import Footer from '../components/Footer';  // Include Footer component
import './Discussion.css'; // Custom CSS for styling

const Discussion = () => {
  const [discussions, setDiscussions] = useState([]);
  const [topic, setTopic] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDiscussion = { topic, author, content };
    setDiscussions([...discussions, newDiscussion]);
    setTopic('');
    setAuthor('');
    setContent('');
  };

  return (
    <>
      <Navigation /> {/* Navbar */}
      <Container className="discussion-container my-5">
        <Row>
          <Col md={6} className="mx-auto"> {/* Adjust the form width and center it */}
            <h1 className="text-center">Discussions</h1>
            <Form onSubmit={handleSubmit} className="discussion-form my-5">
              <Form.Group controlId="discussionTopic">
                <Form.Label>Topic</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter topic" 
                  value={topic} 
                  onChange={(e) => setTopic(e.target.value)} 
                  required
                />
              </Form.Group>
              <Form.Group controlId="discussionAuthor">
                <Form.Label>Your Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  value={author} 
                  onChange={(e) => setAuthor(e.target.value)} 
                  required
                />
              </Form.Group>
              <Form.Group controlId="discussionContent">
                <Form.Label>Discussion Content</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Enter your content" 
                  value={content} 
                  onChange={(e) => setContent(e.target.value)} 
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="submit-button">Post Discussion</Button>
            </Form>
          </Col>
        </Row>

        {/* Recent Discussions Section */}
        <Row className="mt-5">
          <Col>
            <h2 className="text-center">Recent Discussions</h2>
            {discussions.length > 0 ? (
              <ListGroup className="discussion-list">
                {discussions.map((discussion, index) => (
                  <ListGroup.Item key={index} className="discussion-item">
                    <h4>{discussion.topic}</h4>
                    <p><strong>Posted by:</strong> {discussion.author}</p>
                    <p>{discussion.content}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p className="text-center no-discussions">No discussions yet. Be the first to post!</p>
            )}
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Footer */}
    </>
  );
};

export default Discussion;
