// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// STYLES
import 'normalize.css';
import './styles/app.scss';

// RESOURCES
import Logo from './images/logo.png';

// COMPONENTS
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="logo">
          <img alt="logo do evento" src={Logo} />
        </div>
        <div className="text">
          <h1 className="title">Encontro Nacional de Estudantes de Informática</h1>
          <h2 className="date">23 a 26 de fevereiro 2020</h2>
          <h3 className="location">Braga, Portugal</h3>
        </div>
        <SocialLinks facebook="ENEIConf" twitter="eneiconf" instagram="eneiconf" github="eneiconf" />
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

ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
