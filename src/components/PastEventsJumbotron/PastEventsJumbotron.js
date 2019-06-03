import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import fluid from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function PastEventsJumbotron() {
  return (
    <Jumbotron>
      <Container>
        <h1>Past Events</h1>
        <p>
          A collection of past hackathons we have attended!
        </p>
      </Container>
    </Jumbotron>
  );
}
export default PastEventsJumbotron;