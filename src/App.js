import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Cards from './components/Card/Cards';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="Cards Container">
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Cards />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
