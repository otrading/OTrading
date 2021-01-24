import React from 'react';
import ShareButton from './ShareButton';
import logo from './OTrading_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to OTrading!
        </p>

        <a className="App-link"
          href="https://otrading.tv"
          target="_blank" rel="noopener noreferrer"
        >Visit OTrading.tv</a>

        <a className="App-link"
          href="https://www.youtube.com/c/OtradingTv"
          target="_blank" rel="noopener noreferrer"
        >Visit OTrading TV Youtube Channel</a>

        <p>
          OTrading is a channel focusing on Cryptocurrency news, 3 days a week, Monday, Wednesday and Friday I do a quick recap of the most important news in the crypto world.
          <br /><br />
          👍 👍 Follow Me on
        </p>

        <a className="App-link"
          href="https://twitter.com/otradingtv"
          target="_blank" rel="noopener noreferrer"
        >Twitter</a>

        <a className="App-link"
          href="https://www.instagram.com/otrading.tv"
          target="_blank" rel="noopener noreferrer"
        >Instagram</a>

        <p>
          <br /><br />
          Share on social media
        </p>

        <ShareButton />
        
      </header>
    </div>
  );
}

export default App;
