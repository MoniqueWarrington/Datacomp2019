import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Cards from './components/Card/Cards';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css'
import AboutUs from './components/AboutUs/AboutUs';
import OurMission from './components/OurMission/OurMission';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="Cards Container">
        <Row>
          <Col sm={8}>
            <Cards />
          </Col>
          <Col sm={4}>
            <AboutUs />
            <OurMission />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
