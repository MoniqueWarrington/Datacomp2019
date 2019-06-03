import React from 'react';
import Media from 'react-bootstrap/Media';
import ImpactNPOLogo from '../../../static/img/ImpactNPOLogo.jpg';
import Button from 'react-bootstrap/Button';

class ImpactNPOAprilEvent extends React.Component {
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
          className="ImpactNPOLogo"
          src={ImpactNPOLogo}
          alt="ImpactNPO Logo"
        />
        <Media.Body>
          <h1>
            ImpactNPO Hackathon
        </h1>
          <p>
            In April 2019 we attended the ImpactNPO Hackathon. Working alongside the chairman of New Zealand Traditional Boatbuilding School and 3 other incredible volunteers, we completely re-built NZTBS's website! In addition to a brand new theme, we added Eventbrite ticket intergration, Donorbox, Google Maps intergration and an About Us page!
        </p>
          <Button variant="outline-dark" href="http://www.nztbs.org.nz/news/awesome-weekend-with-impactnpo/">NZTBS's Blog Post!</Button>
        </Media.Body>
      </Media >
    );
  }
}
export default ImpactNPOAprilEvent;