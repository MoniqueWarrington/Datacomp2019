import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MoniqueCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='./src/static/img/MoniqueCard.jpg' />
      <Card.Body>
        <Card.Title>Monique Warrington</Card.Title>
        <Card.Text>
          Some really cool information about me!!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </ Card>
  );
}
export default MoniqueCard
