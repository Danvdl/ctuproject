
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col xs={12} md={6}>
          <h1>About CTU-Buddy</h1>
          <p>
            CTU-Buddy is designed to be an online educational tool that helps CTU college students
            throughout their college careers. Its purpose is to enhance the learning experience
            by providing students with necessary resources and support.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Image src="/Resources/map.png" alt="Map of CTU" fluid />
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <h1>CTU Footprint</h1>
          <Image src="/Resources/CTU BUILDING.jpg" alt="CTU-Buddy" fluid />
          <p>
            CTU Training Solutions is a private tertiary education provider offering training
            solutions for full-time and part-time students...
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>About Programmers:</h1>
          <h3>Freek Schaefer</h3>
          <p>
            Hi, I&apos;m Freek Schaefer. I went to Swellendam High School and was swim captain...
          </p>
          <Button variant="primary">Resume</Button>

          <h3>Anro Pace</h3>
          <p>
            I went to Point High School and my role in this project was to create the wireframe...
          </p>
          <Button variant="primary">Resume</Button>

          <h3>Janco Geldenhuys</h3>
          <p>
            I attended an Agricultural school, where I learned practical work and automation...
          </p>
          <Button variant="primary">Resume</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
