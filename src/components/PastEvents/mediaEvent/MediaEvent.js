import React from 'react';
import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

class AIForGoodEvent extends React.Component {
  constructor(props, context) {
    super(props, context)
  };

  render() {
    return (
      <Jumbotron>
        <Media
          style={this.mediaStyling}>
          
          <Media.Body>
            <Container>
              <Row>
                <Col sm="4" md="3" lg="2">
                    <img
                      width="100%"
                      style={{verticalAlign: 'middle', display: 'inline-block', maxWidth: '10rem'}}
                      className="align-self-center"
                      src={this.props.imgSrc}
                      alt={this.props.imgAlt}
                    />
                </Col>
                <Col sm="8" md="9" lg="10">
                  <h1>
                    <strong>{this.props.heading}</strong>
                  </h1>
                  <h5>
                      {this.props.dateRange}
                  </h5>
                  <p>
                      {this.props.description}
                  </p>
                  <Button href={this.props.buttonLink}>{this.props.buttonText}</Button>
                </Col>
              </Row>
            </Container>
          </Media.Body>
        </Media >
      </Jumbotron>
    );
  }
}
export default AIForGoodEvent;