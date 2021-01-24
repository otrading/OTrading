import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to OTrading!
        </p>
        <a
          className="App-link"
          href="https://otrading.tv"
          target="_blank"
          rel="noopener noreferrer"
        >
          OTrading.tv
        </a>
        <br />
        <small>Last edit: 23jan2021 19:48</small>
      </header>
    </div>
  );
}

export default App;
