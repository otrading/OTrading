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
  const title = "OTrading";
  const shareUrl = "https://otrading.netlify.app";
  return (
  		<h2>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
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
            url={shareUrl}
            title={title}
            summary="Go visit OTrading.tv"
            source={shareUrl}>
            <LinkedinIcon logoFillColor="white" />
          </LinkedinShareButton> 

          <RedditShareButton
            url={shareUrl}
            title={shareUrl}>
            <RedditIcon logoFillColor="white" />
          </RedditShareButton> 

          <TelegramShareButton
            url={shareUrl}
            title={shareUrl}>
            <TelegramIcon logoFillColor="white" />
          </TelegramShareButton> 

          <TwitterShareButton
            url={shareUrl}
            title={title}>
            <TwitterIcon logoFillColor="white" />
          </TwitterShareButton>
        </h2>
  	);
}

export default ShareButton;