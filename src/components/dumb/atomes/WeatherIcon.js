import styled from 'styled-components';
import PropTypes from 'prop-types';

const iconsMap = {
  'sunny': '\f00d',
  'cloudy': '\f002',
  'rain': '\f019',
};

export const WeatherIcon = styled.i`
  display: inline-block;
  font-family: Weather;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${props => `${props.size || 3}rem`};
  color: white;
  &:before {
    content: "${({icon}) => iconsMap[icon]}" 
  }
`;

WeatherIcon.propTypes = {
  icon: PropTypes.oneOf(['sunny', 'cloudy', 'rain'])
};
