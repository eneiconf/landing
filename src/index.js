import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './util/serviceWorker';

// SETTINGS
import CONFIG from './data/config.json';

// STYLES
import 'normalize.css';
import './styles/app.scss';

// COMPONENTS
import BackgroundSlider from 'react-background-slider';

import Info from './components/Info';
import SocialLinks from './components/SocialLinks';
import SponsorButton from './components/SponsorButton';

// IMAGES
import images from './images/backgrounds';

const App = () => (
  <div className="content">
    <BackgroundSlider images={images} duration={5} transition={2} />
    <Info {...CONFIG.info} />
    <SocialLinks {...CONFIG.social} />
    <SponsorButton {...CONFIG.sponsor} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
