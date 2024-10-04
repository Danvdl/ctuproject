import { useState } from 'react';
import { Container, Form, Button, ListGroup,  } from 'react-bootstrap';

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
    <Container className="my-5">
      <h1>Discussions</h1>
      <Form onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit">Post Discussion</Button>
      </Form>

      <h2 className="my-5">Recent Discussions</h2>
      <ListGroup>
        {discussions.map((discussion, index) => (
          <ListGroup.Item key={index}>
            <h3>{discussion.topic}</h3>
            <p><strong>Posted by:</strong> {discussion.author}</p>
            <p>{discussion.content}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Discussion;
