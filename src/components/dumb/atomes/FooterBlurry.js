import React from 'react';
import {FooterBase} from './FooterBase';

import Background from '../../../assets/pictures/backaground-2.jpg';

export const FooterBlurry = FooterBase.extend`
  background: url(${Background}) no-repeat center bottom fixed;
  background-size: cover;
  filter: blur(30px);
  transform: scale(1.8)
`;
