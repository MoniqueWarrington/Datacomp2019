import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header'
import './App.css';
import MoniqueCard from './components/Card/moniquecard';
//import "react-bootstrap/dist/react-bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Header />
      <MoniqueCard />
    </div>
  );
}

export default App;
