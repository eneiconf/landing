import React from 'react';

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

export default Info;
