import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header'
import './App.css';
import Cards from './components/Card/Cards';

import MoniqueCard from './components/Card/moniquecard';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
