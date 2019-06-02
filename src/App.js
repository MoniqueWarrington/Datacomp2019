import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header'
import './App.css';
import Cards from './components/Card/Cards';


function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
