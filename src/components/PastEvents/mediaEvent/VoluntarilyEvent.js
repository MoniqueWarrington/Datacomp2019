import React from 'react';
import Media from 'react-bootstrap/Media';
import VoluntarilyLogo from '../../../static/img/voluntarilyLogo.svg';
import Button from 'react-bootstrap/Button';

class VoluntarilyEvent extends React.Component {
  constructor(props, context) {
    super(props, context)
  };

  mediaStyling = {
    padding: '1.25rem',
    border: '1px solid rgba(0, 0, 0, 0.125)',
    'border-radius': '0.25rem',
  }

  render() {
    return (
      <Media
        style={this.mediaStyling}>
        <img
          width={128}
          height={128}
          className="VoluntarilyImage"
          src={VoluntarilyLogo}
          alt="Voluntarily Logo"
        />
        <Media.Body>
          <h1>
            Voluntarily Hackathon
        </h1>
          <p>
            We attended the Voluntarily Hackathon on the 25th - 26th May, to help contribute towards the Voluntarily Platform. Using the MERN stack, we started building an Image uploader that will be used in three locations in the platform. This proved to be a more complex task than originally planned, so we have continued to work on it post event, to complete it to a high standard.
        </p>
          <Button variant="outline-dark" href="https://www.youtube.com/watch?v=9dj0b898B8Y&feature=youtu.be">Find out more!</Button>
        </Media.Body>
      </Media >
    );
  }
}
export default VoluntarilyEvent;