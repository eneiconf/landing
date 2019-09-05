import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const SocialLinks = ({ facebook, twitter, instagram, github }) => (
  <div className="social-container">
    <a href={`https://www.facebook.com/${facebook}`} className="facebook social-link">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href={`https://www.twitter.com/${twitter}`} className="twitter social-link">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a href={`https://www.instagram.com/${instagram}`} className="instagram social-link">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a href={`https://www.github.com/${github}`} className="github social-link">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
  </div>
);

SocialLinks.propTypes = {
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

export default SocialLinks;
