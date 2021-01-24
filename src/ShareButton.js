import React from 'react';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon
} from "react-share";

function ShareButton() {
  return (
  		<h2>
          <FacebookShareButton
            url="https://otrading.netlify.app"
            quote="OTrading"
            hashtag="#OTrading">
            <FacebookIcon logoFillColor="white" />
          </FacebookShareButton> 

          <EmailShareButton
            subject="Go visit OTrading.tv"
            body="Go visit OTrading.tv"
            separator=" ">
            <EmailIcon logoFillColor="white" />
          </EmailShareButton> 

          <LinkedinShareButton
            title="OTrading.tv"
            summary="Go visit OTrading.tv"
            source="https://otrading.netlify.app">
            <LinkedinIcon logoFillColor="white" />
          </LinkedinShareButton> 

          <RedditShareButton
            title="OTrading.tv">
            <RedditIcon logoFillColor="white" />
          </RedditShareButton> 

          <TelegramShareButton
            title="OTrading">
            <TelegramIcon logoFillColor="white" />
          </TelegramShareButton> 

          <TwitterShareButton
            title="OTrading"
            via="OTrading"
            hashtag="#OTrading">
            <TwitterIcon logoFillColor="white" />
          </TwitterShareButton>
        </h2>
  	);
}

export default ShareButton;