import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import fluid from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function PastEventsJumbotron() {
  return (
    <Jumbotron variant='primary'>
      <Container>
        <h1><strong>Past Events</strong></h1>
        <h5>
          Awesome hackathons we have had the privilege of partaking in
        </h5>
      </Container>
    </Jumbotron>
  );
}
export default PastEventsJumbotron;