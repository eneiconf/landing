import React from 'react';
import PropTypes from 'prop-types';

const Info = ({title, date, location, logo}) => (
  <>
    <div className="logo">
      <img alt={logo.alt} src={require(`../images/${logo.path}`)}/>
    </div>

    <div className="text">
      <h1 className="title">{title}</h1>
      <h2 className="date">{date}</h2>
      <h3 className="location">{location}</h3>
    </div>
  </>
);

Info.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  location: PropTypes.string,
  logo: PropTypes.exact({
    alt: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
}

export default Info;
