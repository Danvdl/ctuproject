
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="text-center">
          <h1>Welcome to CTU-Buddy</h1>
          <h3>Your Interactive Education Platform</h3>
          <p>
            Learning at CTU college is not just about books; it&apos;s about making education fun, interactive, and engaging.
            CTU-Buddy is designed to help students manage their schedules, share resources, engage in discussions, and connect with others.
          </p>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        <Col>
          <Button variant="primary" size="lg" href="/about">
            Learn More About Us
          </Button>
        </Col>
        <Col>
          <Button variant="secondary" size="lg" href="/Discussion">
            Join the Discussion
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
