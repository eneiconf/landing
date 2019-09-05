import React from 'react';
import PropTypes from 'prop-types';

const SponsorButton = ({email, subject}) => (
  <a href={`mailto:${email}?subject=${subject}`} className="sponsor">
    Seja Patrocinador
  </a>
);

SponsorButton.propTypes = {
  email: PropTypes.string.isRequired,
  subject: PropTypes.string,
}

SponsorButton.defaultProps = {
  subject: "Interesse em ser patrocinador",
}

export default SponsorButton;
