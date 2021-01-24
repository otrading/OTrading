import React from 'react';
import ShareButton from './ShareButton';
import logo from './OTrading_logo.png';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  const [list, setList] = React.useState(null);
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
          👍 👍 Follow Me on<br />
          <SocialIcon url="https://www.youtube.com/c/OtradingTv" />
          <SocialIcon url="https://twitter.com/otradingtv" />
          <SocialIcon url="https://www.facebook.com/OTradingTV" />
          <SocialIcon url="https://www.linkedin.com/in/otrading-tvchannel-968551192" />
          <SocialIcon url="https://www.instagram.com/otrading.tv" />
        </p>

        <p>
          <iframe src='https://www.youtube.com/embed/TuPBPYkMd24'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
        </p>

        <p>
          Share on social media<br />
          <ShareButton />
        </p>
        
      </header>
    </div>
  );
}


export default App;
