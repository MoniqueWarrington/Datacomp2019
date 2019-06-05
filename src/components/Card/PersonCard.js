import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
class PersonCard extends React.Component{

 render() {
    return (      
    <Card>
    <Card.Img variant="top" src={this.props.imgSrc} />
    <Card.Body>
      <Card.Title><h3>{this.props.firstName}</h3><h3>{this.props.lastName}</h3></Card.Title>
      <ListGroup variant="flush">
          {/* TODO Turn this into a for loop? */}
        <ListGroup.Item>{this.props.item1}</ListGroup.Item>
        <ListGroup.Item>{this.props.item2}</ListGroup.Item>
        <ListGroup.Item>{this.props.item3}</ListGroup.Item>
        <ListGroup.Item>{this.props.item4}</ListGroup.Item>
        <ListGroup.Item>
          <ButtonGroup>
            <Button href={this.props.linkedInLink}>LinkedIn</Button>
            <Button href={this.props.githubLink}>GitHub</Button>
          </ButtonGroup>
        </ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>
  );
}
}

export default PersonCard;