import { Container, Row, Col, Table } from 'react-bootstrap';
import './Timetable.css'; // Import custom CSS for modern styling
import Navigation from '../components/Navbar'; // Import the Navbar component
import Footer from '../components/Footer'; // Import the Footer component

const Timetable = () => {
  return (
    <Container fluid>
      {/* Top navigation bar */}
      <Navigation />

      {/* Timetable Section */}
      <Row className="timetable-section py-5 my-5"> {/* Added class "timetable-section" */}
        <Col>
          <h1>Schedule</h1>
          <Table bordered responsive>
            <thead>
              <tr>
                <th></th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:00-9:00</td>
                <td>RD412</td>
                <td>RD412</td>
                <td>ENA412</td>
                <td>ENA412</td>
                <td className="group">Group</td>
              </tr>
              <tr>
                <td>9:00-10:00</td>
                <td>RD412</td>
                <td>RD412</td>
                <td>ENA412</td>
                <td>ENA412</td>
                <td>CF412</td>
              </tr>
              <tr>
                <td>10:00-11:00</td>
                <td>RD412</td>
                <td>RD412</td>
                <td>ENA412</td>
                <td>ENA412</td>
                <td>CF412</td>
              </tr>
              <tr>
                <td>11:00-12:00</td>
                <td className="group">Group</td>
                <td>Research</td>
                <td>ENA412</td>
                <td>Research</td>
                <td>CF412</td>
              </tr>
              <tr>
                <td>12:00-13:00</td>
                <td colSpan="5">Break</td>
              </tr>
              <tr>
                <td>13:00-14:00</td>
                <td>CW412</td>
                <td className="group">Group</td>
                <td>ENA412</td>
                <td>ENA412</td>
                <td>CW412</td>
              </tr>
              <tr>
                <td>14:00-15:00</td>
                <td>CW412</td>
                <td>CW412</td>
                <td>ENA412</td>
                <td className="group">Group</td>
                <td>CF412</td>
              </tr>
              <tr>
                <td>15:00-16:00</td>
                <td>CW412</td>
                <td>CW412</td>
                <td>ENA412</td>
                <td>ENA412</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Task Dates Section */}
      <Row className="my-5">
        <Col>
          <h1>Task Dates</h1>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Task</th>
                <th>Subject</th>
                <th>Hand-outs</th>
                <th>Hand-ins</th>
                <th>Total Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CF Formative 1</td>
                <td>Network Fundamentals</td>
                <td>24 July</td>
                <td>18 August</td>
                <td>100</td>
              </tr>
              {/* Add more rows as necessary */}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Timetable;
