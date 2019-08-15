import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

class SocialLinks extends React.Component {
  render() {
    return (
      <div className="social-container">
        <a href={`https://www.facebook.com/${this.props.facebook}`} className="facebook social-link">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href={`https://www.twitter.com/${this.props.twitter}`} className="twitter social-link">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href={`https://www.instagram.com/${this.props.instagram}`} className="instagram social-link">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href={`https://www.github.com/${this.props.github}`} className="github social-link">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    );
  }
}

export default SocialLinks;
