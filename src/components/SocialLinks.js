import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function SocialLinks(props) {
    return (
      <div className="social-container">
        <a href={`https://www.facebook.com/${props.facebook}`} className="facebook social-link">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href={`https://www.twitter.com/${props.twitter}`} className="twitter social-link">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href={`https://www.instagram.com/${props.instagram}`} className="instagram social-link">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href={`https://www.github.com/${props.github}`} className="github social-link">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    );
}
