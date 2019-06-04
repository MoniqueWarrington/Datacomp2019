import React from 'react';
import Media from 'react-bootstrap/Media';
import WAInotTeam from '../../../static/img/WAInotTeam.jpeg';
import Button from 'react-bootstrap/Button';
import { Jumbotron } from 'react-bootstrap';

class AIForGoodEvent extends React.Component {
  constructor(props, context) {
    super(props, context)
  };

  render() {
    return (
      <Jumbotron>
        <Media
          style={this.mediaStyling}>
          <img
            width={128}
            height={128}
            className="align-self-center mr-3"
            src={this.props.imgSrc}
            alt={this.props.imgAlt}
          />
          <Media.Body>
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
          </Media.Body>
        </Media >
      </Jumbotron>
    );
  }
}
export default AIForGoodEvent;