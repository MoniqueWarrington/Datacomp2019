import React from 'react';
import Media from 'react-bootstrap/Media';
import WAInotTeam from '../../../static/img/WAInotTeam.jpeg';
import Button from 'react-bootstrap/Button';

class AIForGoodEvent extends React.Component {
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
          className="align-self-center mr-3"
          src={WAInotTeam}
          alt="WAInotTeam"
        />
        <Media.Body>
          <h1>
            Microsoft Azure AI For Good Hackathon
          </h1>
          <h5>
            06/04/2019 - 07/04/2019
          </h5>
          <p>
            Our team, named WAInot, was focused on using AI to calculate expensive nitrate data, using data collected from cheaper water sensors. During this weekend we gained partnership from Riverwatch NZ and WAI NZ, who both want to continue the idea further with us.
          </p>
        </Media.Body>
      </Media >
    );
  }
}
export default AIForGoodEvent;