import React from 'react';
import Logo from '../images/logo.png';
import SocialLinks from './SocialLinks';

export default function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="logo">
          <img alt="logo do evento" src={Logo} />
        </div>
        <div className="u-padding-sm" />
        <div className="text">
          <h1 className="title">Encontro Nacional de Estudantes de Informática</h1>
          <h2 className="date">23 a 26 de Fevereiro 2020</h2>
          <h3 className="location">Braga, Portugal</h3>
        </div>
        <SocialLinks />
        <div className="darken">
          <div id="backgroundchange">
            <div className="backgroundimg" id="back1" />
            <div className="backgroundimg" id="back2" />
            <div className="backgroundimg" id="back3" />
            <div className="backgroundimg" id="back4" />
          </div>
        </div>
      </div>
    </div>
  );
}
