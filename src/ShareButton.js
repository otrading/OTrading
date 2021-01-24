import React from 'react';

import {
  EmailShareButton,
  FacebookShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon
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
        </h2>
  	);
}

export default ShareButton;