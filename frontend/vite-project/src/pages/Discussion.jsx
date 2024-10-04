import { useState } from 'react';
import { Container, Form, Button, ListGroup, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useQuery, useMutation, gql } from '@apollo/client';
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import './Discussion.css';

// GraphQL Queries and Mutations
const GET_DISCUSSIONS = gql`
  query GetDiscussions {
    discussions {
      discussion_id
      topic
      content
      user_id
    }
  }
`;

const ADD_DISCUSSION = gql`
  mutation AddDiscussion($user_id: Int!, $topic: String!, $content: String!) {
    createDiscussion(user_id: $user_id, topic: $topic, content: $content) {
      discussion_id
      topic
      content
      user_id
    }
  }
`;

const Discussion = () => {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [loadingPost, setLoadingPost] = useState(false); // For handling loading state when posting
  const [errorMessage, setErrorMessage] = useState(''); // For handling errors

  // Fetch discussions
  const { loading: loadingDiscussions, error: errorDiscussions, data } = useQuery(GET_DISCUSSIONS);

  // Mutation to add a discussion
  const [addDiscussion] = useMutation(ADD_DISCUSSION, {
    refetchQueries: [{ query: GET_DISCUSSIONS }], // Refetch discussions after posting
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingPost(true); // Start loading
    setErrorMessage(''); // Reset error message
    try {
      await addDiscussion({ variables: { user_id: 1, topic, content } });  // Replace user_id with the actual value
      setTopic(''); // Clear form fields
      setContent('');
    } catch (error) {
      setErrorMessage('Failed to create discussion. Please try again.');
      console.error('Error creating discussion:', error);
    } finally {
      setLoadingPost(false); // Stop loading
    }
  };

  if (loadingDiscussions) return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
  if (errorDiscussions) return <Alert variant="danger">Error: {errorDiscussions.message}</Alert>;

  return (
    <>
      <Navigation />
      <Container className="discussion-container my-5">
        <Row>
          <Col md={6} className="mx-auto">
            <h1 className="text-center">Discussions</h1>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
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
              <Button variant="primary" type="submit" className="submit-button" disabled={loadingPost}>
                {loadingPost ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Post Discussion'}
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h2 className="text-center">Recent Discussions</h2>
            {data && data.discussions.length > 0 ? (
              <ListGroup className="discussion-list">
                {data.discussions.map((discussion) => (
                  <ListGroup.Item key={discussion.discussion_id} className="discussion-item">
                    <h4>{discussion.topic}</h4>
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
      <Footer />
    </>
  );
};

export default Discussion;
