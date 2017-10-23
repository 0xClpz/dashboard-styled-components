import React, { Component } from 'react';
import {injectGlobal} from 'styled-components';
import './assets/styles/reboot.css';
import {Landing} from './components/pages/landing';
import OpenSans from './assets/styles/fonts/OpenSans-Regular.ttf';
import Weather from './assets/styles/fonts/weathericons-regular-webfont.ttf';

injectGlobal`
  @font-face {
    font-family: OpenSans;
    src: url('${OpenSans}') format('truetype')
  }
  @font-face {
    font-family: Weather;
    src: url('${Weather}')
  }
`;

class App extends Component {
  render() {
    return (
      <Landing />
    );
  }
}

export default App;
