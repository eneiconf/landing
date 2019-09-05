import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './util/serviceWorker';

// SETTINGS
import CONFIG from './data/config.json';

// STYLES
import 'normalize.css';
import './styles/app.scss';

// COMPONENTS
import Info from './components/Info';
import SocialLinks from './components/SocialLinks';
import SponsorButton from './components/SponsorButton';

const App = () => (
  <div className="wrapper">
    <div className="content">
      <Info
        title={CONFIG.info.title}
        date={CONFIG.info.date}
        location={CONFIG.info.location}
        logo={CONFIG.info.logo}
      />
      <SocialLinks
        facebook={CONFIG.social.facebook}
        twitter={CONFIG.social.twitter}
        instagram={CONFIG.social.instagram}
        github={CONFIG.social.github}
      />
      <SponsorButton email={CONFIG.sponsor.email}
        subject={CONFIG.sponsor.subject} />
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

ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
