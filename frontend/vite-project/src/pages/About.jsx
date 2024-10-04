import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Navigation from '../components/Navbar';  // Import the Navbar component
import Footer from '../components/Footer';  // Import the Footer component
import './About.css';  // Link the custom CSS

const About = () => {
  return (
    <div>
      <Navigation />  {/* Include the Navbar component */}
      <Container fluid className="about-container">
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
            {/* Update the image path to use public folder */}
            <Image src="/assets/map.png" alt="Map of CTU" className="about-image" fluid />
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h1>CTU Footprint</h1>
            <p>
              CTU Training Solutions is a private tertiary education provider offering training
              solutions for full-time and part-time students across South Africa. Our goal is to
              empower students with the knowledge they need to succeed in their chosen careers.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>About Programmers</h1>

            <h3>Freek Schaefer</h3>
            <p>
              Hi, I&apos;m Freek Schaefer. I went to Swellendam High School and was swim captain.
              My passion for problem-solving and teamwork helped shape my role as a developer.
            </p>
            <Button className="resume-button">Resume</Button>

            <h3>Anro Pace</h3>
            <p>
              I went to Point High School and my role in this project was to create the wireframe
              for the entire platform. My interest in UX design makes me focus on user-friendly applications.
            </p>
            <Button className="resume-button">Resume</Button>

            <h3>Janco Geldenhuys</h3>
            <p>
              I attended an Agricultural school, where I learned practical work and automation. 
              My technical expertise and attention to detail led me to focus on the backend systems.
            </p>
            <Button className="resume-button">Resume</Button>
          </Col>
        </Row>
      </Container>
      <Footer />  {/* Include the Footer */}
    </div>
  );
};

export default About;
