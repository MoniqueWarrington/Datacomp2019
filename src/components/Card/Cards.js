import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import MoniqueCardImg from '../../static/img/MoniqueCardImg.jpg';
import AidanCard from '../../static/img/AidanCard.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
//import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Cards() {
  return (
    <CardDeck style={{ height: '100%' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={MoniqueCardImg} />
        <Card.Body>
          <Card.Title><strong>Monique Warrington</strong></Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Second Year Software Development Student</ListGroup.Item>
            <ListGroup.Item>Charity and Event Coordinator at ImpactNPO since October 2018</ListGroup.Item>
            <ListGroup.Item>Completed an eight month internship at Playtech</ListGroup.Item>
            <ListGroup.Item>Really wants to be a part of DataComp Talent-X 2019</ListGroup.Item>
            <ListGroup.Item>
              <ButtonGroup>
                <Button variant="outline-dark" href="https://www.linkedin.com/in/monique-warrington/">LinkedIn</Button>
                <Button variant="outline-dark" href="https://github.com/MoniqueWarrington">GitHub</Button>
              </ButtonGroup>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={AidanCard} />
        <Card.Body>
          <Card.Title><strong>Aidan Harris</strong></Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>One and a half years experience as a Software Developer</ListGroup.Item>
            <ListGroup.Item>Bachelor of Information Sciences with a major in Computer Science</ListGroup.Item>
            <ListGroup.Item>Also really wants to be a part of DataComp Talent-X 2019</ListGroup.Item>
            <ListGroup.Item>
              <ButtonGroup>
                <Button variant="outline-dark" href="https://www.linkedin.com/in/aidanharris/">LinkedIn</Button>
                <Button variant="outline-dark" href="https://github.com/AidanTheDeveloper">GitHub</Button>
              </ButtonGroup>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}
export default Cards
