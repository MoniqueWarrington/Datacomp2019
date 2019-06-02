import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import MoniqueCardImg from '../../static/img/MoniqueCardImg.jpg';
import AidanCard from '../../static/img/AidanCard.jpg';

function Cards() {
  return (
    <CardDeck>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={MoniqueCardImg} />
        <Card.Body>
          <Card.Title>Monique Warrington</Card.Title>
          <Card.Text>
            Some really cool information about me!!
          </Card.Text>
          <Button variant="primary" href="https://www.linkedin.com/in/monique-warrington/">LinkedIn</Button>
          <Button variant="primary" href="https://github.com/MoniqueWarrington">GitHub</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={AidanCard} />
        <Card.Body>
          <Card.Title>Aidan Harris</Card.Title>
          <Card.Text>
            Some really cool information about Aidan!!
          </Card.Text>
          <Button variant="primary" href="https://www.linkedin.com/in/aidanharris/">LinkedIn</Button>
          <Button variant="primary" href="https://github.com/AidanTheDeveloper">GitHub</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}
export default Cards
