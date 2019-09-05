import React from 'react';

const SponsorButton = ({email, subject}) => (
  <a href={`mailto:${email}?subject=${subject}`} className="sponsor">
    Seja Patrocinador
  </a>
);

export default SponsorButton;
