import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Cards from './components/Card/Cards';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css'
import VoluntarilyEvent from './components/PastEvents/mediaEvent/VoluntarilyEvent';
import ImpactNPOAprilEvent from './components/PastEvents/mediaEvent/ImpactNPOAprilEvent';
import AIForGoodEvent from './components/PastEvents/mediaEvent/AIForGoodEvent';

import Footer from './components/Footer/Footer'
import PastEventsJumbotron from './components/PastEventsJumbotron/PastEventsJumbotron';
import Information from './components/Information/Information';
function App() {
  return (
    <div className="App">
      <style>
      {`
          .padBottom {
              padding-bottom: 3rem;
          }
      `}
      </style>
      <Header />
      <Container className="Cards Container" >
        <Container className='padBottom'>
          <Row>
            <Col sm={8}>
              <Cards />
            </Col>
            <Col sm={4} >
              <Row style={{paddingBottom : '1rem'}}>
                <Information title="About Us" message="We have been in a relationship for two years and have been writing programs together for half of that time. Our lives both revolve around software development, and we are always looking for the next opportunity to use our skills. Whether it be helping out non-profit organisations at hackathons, or attending events to learn more about new technologies we are always looking to get ourselves involved in the IT community."/>
              </Row>
              <Row style={{paddingTop : '1rem'}}>
                <Information title="Our Goal" message="There are many amazing people with brilliant ideas which can be brought to life using technology. Our goal is to help bring these ideas to life. We are always looking for opportunities to help others using technology and challenging ourselves so that we can improve our skills. Hackathons are the perfect way for us to pursue our goals."/>
              </Row>
            </Col>
          </Row>
        </Container>
        <PastEventsJumbotron />
        <Row style={{ paddingBottom: '2rem' }}>
          <VoluntarilyEvent />
        </Row>
        <Row style={{ paddingBottom: '2rem' }}>
          <ImpactNPOAprilEvent />
        </Row>
        <Row style={{ paddingBottom: '2rem' }}>
          <AIForGoodEvent />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
