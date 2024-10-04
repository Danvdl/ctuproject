import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Timetable = () => {
  return (
    <Container className="my-5">
      <h1>Timetable</h1>
      <Table striped bordered hover>
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
            <td>8:00 - 9:00</td>
            <td>RD412</td>
            <td>RD412</td>
            <td>ENA412</td>
            <td>ENA412</td>
            <td>Group</td>
          </tr>
          <tr>
            <td>9:00 - 10:00</td>
            <td>RD412</td>
            <td>RD412</td>
            <td>ENA412</td>
            <td>ENA412</td>
            <td>CF412</td>
          </tr>
          <tr>
            <td>10:00 - 11:00</td>
            <td>RD412</td>
            <td>RD412</td>
            <td>ENA412</td>
            <td>ENA412</td>
            <td>CF412</td>
          </tr>
          <tr>
            <td>11:00 - 12:00</td>
            <td>Group</td>
            <td>Research</td>
            <td>ENA412</td>
            <td>Research</td>
            <td>CF412</td>
          </tr>
          <tr>
            <td>12:00 - 13:00</td>
            <td colSpan="5">Break</td>
          </tr>
          <tr>
            <td>13:00 - 14:00</td>
            <td>CW412</td>
            <td>Group</td>
            <td>ENA412</td>
            <td>ENA412</td>
            <td>CW412</td>
          </tr>
          <tr>
            <td>14:00 - 15:00</td>
            <td>CW412</td>
            <td>CW412</td>
            <td>ENA412</td>
            <td>Group</td>
            <td>CF412</td>
          </tr>
          <tr>
            <td>15:00 - 16:00</td>
            <td>CW412</td>
            <td>CW412</td>
            <td>ENA412</td>
            <td>ENA412</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Timetable;
