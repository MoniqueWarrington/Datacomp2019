import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import PersonCard from './components/Card/PersonCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './static/bootstrap/bootstrap.css'
import './static/bootstrap/customBootstrap.css';
import MediaEvent from './components/PastEvents/mediaEvent/MediaEvent'
import Footer from './components/Footer/Footer'
import PastEventsJumbotron from './components/PastEventsJumbotron/PastEventsJumbotron';
import Information from './components/Information/Information';
import VoluntarilyLogo from './static/img/voluntarilyLogo.svg';
import ImpactNPOLogo from './static/img/ImpactNPOLogo.png';
import WAInotTeam from './static/img/WAInotTeam.jpeg';
import MoniqueCardImg from './static/img/MoniqueCardImg.jpg';
import AidanCard from './static/img/AidanCard.jpg';

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
        <Row>
          <Container className='padBottom'>
            <Row>
            <Col xs="12" md="6" lg="4">
              <PersonCard 
                imgSrc={MoniqueCardImg}
                firstName="Monique"
                lastName="Warrington"
                item1="Second Year Software Development Student"
                item2="Charity and Event Coordinator at ImpactNPO since October 2018"
                item3="Completed an eight month internship at Playtech"
                item4="Really wants to be a part of DataComp Talent-X 2019"
                linkedInLink="https://www.linkedin.com/in/monique-warrington"
                githubLink="https://github.com/MoniqueWarrington"
              />
            </Col>
            <Col xs="12" md="6" lg="4">
            <PersonCard 
              imgSrc={AidanCard}
              firstName="Aidan"
              lastName="Harris"
              item1="Seven months experience as a back-end Java Developer"
              item2="Eight months experience as a full-stack C# WPF Application Developer"
              item3="Bachelor of Information Sciences with a major in Computer Science"
              item4="Also really wants to be a part of DataComp Talent-X 2019"
              linkedInLink="https://www.linkedin.com/in/aidanharris"
              githubLink="https://github.com/AidanTheDeveloper"
            />
            </Col>
            <Col xs="12" md="12" lg="4">
              <Row style={{ paddingBottom: '1rem' }}>
                <Information title="About Us" message="We have been in a relationship for two years and have been writing programs together for half of that time. Our lives both revolve around software development, and we are always looking for the next opportunity to use our skills. Whether it be helping out non-profit organisations at hackathons, or attending events to learn more about new technologies we are always looking to get ourselves involved in the IT community." />
              </Row>
              <Row style={{ paddingTop: '1rem' }}>
                <Information title="Our Goal" message="There are many amazing people with brilliant ideas which can be brought to life using technology. Our goal is to help bring these ideas to life. We are always looking for opportunities to help others using technology and challenging ourselves so that we can improve our skills. Hackathons are the perfect way for us to pursue our goals." />
              </Row>
            </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <PastEventsJumbotron />
        </Row>
        <Row style={{ paddingBottom: '2rem' }}>
          <MediaEvent
            imgSrc={VoluntarilyLogo}
            imgAlt="Voluntarily Logo"
            heading="Voluntarily Hackathon"
            dateRange="25/05/2019 - 26/05/2019"
            description="This event was focused on contributing towards building the Voluntarily Platform. Using the MERN stack, we started creating an Image uploader that will be used in three locations in the platform. This proved to be a more complex task than we expected, so we are continuing to work on it so that it may be completed to a high standard."
            buttonLink="https://www.youtube.com/watch?v=9dj0b898B8Y&feature=youtu.be"
            buttonText="Find out more!" />
        </Row>
        <Row style={{ paddingBottom: '2rem' }}>
          <MediaEvent
            imgSrc={ImpactNPOLogo}
            imgAlt="ImpactNPO Logo"
            heading="ImpactNPO Hackathon"
            dateRange="12/04/2019 - 12/04/2019"
            description="Working alongside the chairman of New Zealand Traditional Boatbuilding School and 3 other incredible volunteers, we completely re-built NZTBS's website! In addition to a brand new theme, we added Eventbrite ticket intergration, Donorbox, Google Maps intergration and an About Us page!"
            buttonLink="http://www.nztbs.org.nz/news/awesome-weekend-with-impactnpo/"
            buttonText="NZTBS's Blog Post!" />
        </Row>
        <Row style={{ paddingBottom: '2rem' }}>
          <MediaEvent
            imgSrc={WAInotTeam}
            imgAlt="Hackathon team picture"
            heading="Microsoft Azure AI For Good Hackathon"
            dateRange="06/04/2019 - 07/04/2019"
            description="Our team, named WAInot, was focused on using AI to calculate expensive nitrate data, using data collected from cheaper water sensors. During this weekend we initiated communication with Riverwatch NZ and WAI NZ, who believe that our idea is viable. Communication is still ongoing, although progress has slowed since the event."
            buttonLink="https://www.awaregroup.com/ai-for-good-hackfest/"
            buttonText="Find out more!" />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
